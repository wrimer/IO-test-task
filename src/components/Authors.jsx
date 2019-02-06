import React from 'react';
import Author from './Author'
import Search from './Search'
import PageNavigation from './PageNavigation'
import data from '../data/data'

export default class Authors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      searchQuery: "",
      page: 1
    }
  }

  handleSearch = (e) => {
    const searchQuery = e.target.value;
    const searchedAuthors = this.initialAuthors.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    this.setState({
      authors: searchedAuthors,
      searchQuery,
      page: 1
    });
  };

  setPage = (page) => {
    this.setState({
      page
    });
  };

  componentDidMount() {
    let authors = data.sort((a, b) => {
      return a - b;
    });
    for (let i = 0; i < 3; i++) {
      authors[i].topPlace = i + 1;
    }

    this.setState({
      authors
    }, () => {
      this.initialAuthors = authors;
    });
  }


  render() {
    const {authors, page, searchQuery} = this.state;
    const arrayIndex = (page - 1) * 10
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          searchQuery={searchQuery}/>
        <ol>
          {authors.slice(arrayIndex, arrayIndex + 10).map((item) => {
            return <Author
              /*TODO key values*/
              key={item.name}
              user={item}/>
          })}
        </ol>
        <PageNavigation
          authorsCount={authors.length}
          page={page}
          setPage={this.setPage}/>
      </div>
    );
  }
}
