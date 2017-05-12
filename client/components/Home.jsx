import React from 'react';
import { gql, graphql } from 'react-apollo';
import Post from './Post.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <div>
        <div>This is Nectar Home</div>
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


export default graphql(query)(Home);
