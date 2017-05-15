import React from 'react';


class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      contentClasses: ['postContent']
    };
  }

  pickRandomImage() {
    const photos = [
      require('../media/goblet.svg'),
      require('../media/barrel.svg'),
      require('../media/beerCap.svg'),
      require('../media/hop.svg')
    ];
    const randomIndex = Math.floor(Math.random() * 3);
    return photos[randomIndex];
  }

  toggleContentClasses() {
    const classes = [...this.state.contentClasses];
    if (classes.length === 1) {
      classes.push('show');
      this.setState({
        contentClasses: classes
      });
    } else {
      classes.pop();
      this.setState({
        contentClasses: classes
      });
    }
  }

  renderWithContent() {
    return <article className='postContent'>{this.props.post.content}</article>;
  }

  render() {
    return (
      <div
        className='post'
        onClick={() => {
          this.toggleContentClasses();
        }}>
        <div className='postHeader'>
          <img className='postOwnerImg' src={this.pickRandomImage()}/>
          <div className='postSub-header'>
            <h4 className='postOwner'>@{this.props.post.owner}</h4>
            <span>&nbsp;posted about&nbsp;</span>
            <h3 className='postTitle'>{this.props.post.title}</h3>
          </div>
        </div>
        <article
          className={this.state.contentClasses.join(' ')}>
          {this.props.post.content}
        </article>
      </div>
    );
  }
}


export default Post;
