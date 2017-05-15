import React from 'react';
import { gql, graphql } from 'react-apollo';
import PostsFeed from './PostsFeed.jsx';
import Products from './Products.jsx';


class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  renderLoading() {
    return (
      <div>Loading</div>
    );
  }

  render() {
    return (
      <div className='home'>
        <div>This is Nectar Home</div>
        <div className='homeMain'>
          <Products/>
          <PostsFeed/>
        </div>
      </div>
    );
  }
}




export default Home;
