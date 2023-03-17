import React from "react";

export const Pagination = ({ prev, next, onPrevious, onNext }) => {
  const handlePrevius = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevius}>
              Previus
            </button>
          </li>
        ) : null}
        {next ? (
        <li className="page-item">
          <button className="page-link" onClick={handleNext}>
            Next
          </button>
        </li>
        ) : null}
      </ul>
    </nav>
  );
};
