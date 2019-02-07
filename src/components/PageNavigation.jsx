import React from 'react';

const PageNavigation = ({authorsCount, page, setPage}) => {
  const arrayIndex = (page - 1) * 10;
  return (
    <div className="pagination">
      <button
        className="pagination__btn pagination__btn_prev"
        disabled={arrayIndex === 0}
        onClick={() => {
          setPage(page - 1)
        }}/>
      {`${authorsCount === 0 ? 0 : arrayIndex + 1} - ${arrayIndex + 10 > authorsCount ? authorsCount : arrayIndex + 10}`}
      <button
        className="pagination__btn pagination__btn_next"
        disabled={arrayIndex + 10 > authorsCount}
        onClick={() => {
          setPage(page + 1)
        }}/>
    </div>
  )
};

export default PageNavigation;

