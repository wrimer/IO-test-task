import React from 'react';

class Author extends React.Component {
  render() {
    return (
      <li>

        {this.props.user.name}
        {" " + this.props.user. pageviews}
      </li>
    );
  }
}

export default Author;
