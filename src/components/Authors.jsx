import React from 'react';
import Author from './Author'
import Search from './Search'
import PageNavigation from './PageNavigation'
import SortBy from './SortBy'
import data from '../data/data'
import {SORT_BY_NAME, SORT_BY_VIEWS} from '../data/constants'


export default class Authors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      searchQuery: "",
      page: 1,
      sortBy: SORT_BY_VIEWS
    }
  }

  handleSearch = ({target: {value: searchQuery}}) => {
    const searchedAuthors = this.initialAuthors.filter((item) => {
      return item.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    this.setState({
      authors: searchedAuthors,
      searchQuery,
      page: 1
    });
  };

  handleSort = ({target: {name: value}}) => {
    let authors = this.state.authors;
    switch (value) {
      case SORT_BY_VIEWS:
        this.initialAuthors = this.initialAuthors.sort(this.sortByViews);
        authors = authors.sort(this.sortByViews);
        break;
      case SORT_BY_NAME:
        this.initialAuthors = this.initialAuthors.sort(this.sortByNames);
        authors = authors.sort(this.sortByNames);
        break;
      default:
        break;
    }
    this.setState({
      authors,
      sortBy: value
    });
  };

  setPage = (page) => {
    this.setState({
      page
    });
  };

  sortByViews = (a, b) => {
    return b.pageviews - a.pageviews;
  };

  sortByNames = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  componentDidMount() {
    let authors = data.sort(this.sortByViews);
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
    const {authors, page, searchQuery, sortBy} = this.state;
    const arrayIndex = (page - 1) * 10;
    return (
      <>
        <SortBy
          sortBy={sortBy}
          handleSort={this.handleSort}/>
        <div
          className="authors">
          <Search
            sortBy={sortBy}
            handleSearch={this.handleSearch}
            handleSort={this.handleSort}
            searchQuery={searchQuery}/>
          <ol>
            {authors.slice(arrayIndex, arrayIndex + 10).map((item, index) => {
              return <Author
                /*TODO key values*/
                key={item.name}
                user={item}
                index={arrayIndex + index}/>
            })}
          </ol>
        </div>
        <PageNavigation
          authorsCount={authors.length}
          page={page}
          setPage={this.setPage}/>
      </>
    );
  }
}
