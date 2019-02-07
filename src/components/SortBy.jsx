import React from 'react';
import {SORT_BY_NAME, SORT_BY_VIEWS} from "../data/constants";

const SortBy = ({sortBy, handleSort}) => (
  <div className="sortBy">
    <label className="sortBy__label">
      <input
        className="sortBy__radio"
        type="radio"
        name={SORT_BY_VIEWS}
        checked={sortBy === SORT_BY_VIEWS}
        onChange={handleSort}/>
      <span className="sortBy__checked"/>
      Сортировка по просмотрам
    </label>
    <label className="sortBy__label">
      <input
        className="sortBy__radio"
        type="radio"
        name={SORT_BY_NAME}
        checked={sortBy === SORT_BY_NAME}
        onChange={handleSort}/>
      <span className="sortBy__checked"/>
      Сортировка по алфавиту
    </label>
  </div>
);

export default SortBy;
