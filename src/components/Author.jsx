import React from 'react';
import Avatar from './Avatar'

const Author = ({user, index}) => (
  <li className={"author " + (((index % 2) ? "author_odd" : ""))}>
    <p className="author__index">{index + 1}</p>
    <Avatar
      name={user.name}/>
    <div className="author__info">
      <p className="author__name">{user.name}</p>
      <p className="author__publications">{`${user.count_pub} публ.`}</p>
    </div>
    {user.topPlace && (<img
      className="author__medal"
      alt="top author"
      src={require(`../img/place-${user.topPlace}.svg`)}/>)}
    <p className="author__views">
      {user.pageviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
    </p>
  </li>
);

export default Author;
