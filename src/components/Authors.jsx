import React from 'react';
import Author from './Author'
import PageNavigation from './PageNavigation'
import data from '../data/data'

export default class Authors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: data,
      currentIndex: 0
    }
  }

  setCurrentIndex = (index) => {
    this.setState({
      currentIndex: index
    });
  };

  render() {
    const {authors, currentIndex} = this.state;
    return (
      <div>
        {authors.slice(currentIndex, currentIndex + 10).map((item) => {
          return <Author
            /*TODO key values*/
            key={item.name}
            user={item}/>
        })}
        <PageNavigation
          authorsCount={authors.length}
          currentIndex={currentIndex}
          setCurrentIndex={this.setCurrentIndex}/>
      </div>
    );
  }
}
