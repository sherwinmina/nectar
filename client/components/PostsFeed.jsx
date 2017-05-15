import React from 'react';
import Post from './Post.jsx';
import { gql, graphql } from 'react-apollo';


class PostsFeed extends React.Component {

  renderPosts(postsList) {
    return postsList.map(post => <Post key={post.id} post={post}/>);
  }

  renderLoading() {
    return (
      <div>Loading</div>
    );
  }

  render() {
    return (
      <div className='postsFeed'>
        {this.props.data.loading ? this.renderLoading() : this.renderPosts(this.props.data.posts)}
      </div>
    );
  }
}

const query = gql`
  query {
    posts {
      id
      owner
      title
      content
    }
  }
`;


export default graphql(query)(PostsFeed);
