import React from 'react';
import ReactPaginate from 'react-paginate';

function Paginate({ pageCount, onPageClick }) {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        pageCount={pageCount}
        // marginPagesDisplayed={2}
        // pageRangeDisplayed={3}
        onPageChange={onPageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default Paginate;
