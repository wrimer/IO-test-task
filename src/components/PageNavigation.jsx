import React from 'react';

const PageNavigation = ({authorsCount, currentIndex, setCurrentIndex}) => (
  <div>
    <button
      disabled={currentIndex === 0}
      onClick={() => {setCurrentIndex(currentIndex - 10)}}>
      Prev
    </button>
    {`${currentIndex + 1} - ${currentIndex + 10 > authorsCount ? authorsCount : currentIndex + 10}`}
    <button
      disabled={currentIndex + 10 > authorsCount}
      onClick={() => {setCurrentIndex(currentIndex + 10)}}>
      Next
    </button>
  </div>
);

export default PageNavigation;

