import React from 'react';
import {SORT_BY_NAME, SORT_BY_VIEWS} from "../data/constants";

const SortBy = ({sortBy, handleSort}) => (
  <>
    <div className="filters__sort">
      <label>
        <input
          type="radio"
          name={SORT_BY_VIEWS}
          checked={sortBy === SORT_BY_VIEWS}
          onChange={handleSort}/>
        Отсортировать по кол-ву просмотров
      </label>
      <label>
        <input
          type="radio"
          name={SORT_BY_NAME}
          checked={sortBy === SORT_BY_NAME}
          onChange={handleSort}/>
        Отсортировать по алфавиту
      </label>
    </div>
  </>
);

export default SortBy;
