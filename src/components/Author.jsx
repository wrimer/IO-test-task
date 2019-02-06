import React from 'react';

class Author extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.name}
        {" " + this.props.user. pageviews}
      </div>
    );
  }
}

export default Author;
