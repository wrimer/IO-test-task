import React from 'react';

const PageNavigation = ({authorsCount, page, setPage}) => {
  const arrayIndex = (page - 1) * 10;
  return (
    <div>
      <button
        disabled={arrayIndex === 0}
        onClick={() => {
          setPage(page - 1)
        }}>
        Prev
      </button>
      {`${arrayIndex + 1} - ${arrayIndex + 10 > authorsCount ? authorsCount : arrayIndex + 10}`}
      <button
        disabled={arrayIndex + 10 > authorsCount}
        onClick={() => {
          setPage(page + 1)
        }}>
        Next
      </button>
    </div>
  )
};

export default PageNavigation;

