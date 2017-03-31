import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>This is Nectar</div>
    );
  }
}

export default Relay.createContainer(
  App,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Posts {
          id
          title
          content
        }
      `
    }
  }
);
