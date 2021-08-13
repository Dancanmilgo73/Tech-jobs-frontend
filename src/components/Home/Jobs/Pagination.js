import React from "react";
import "./index.css";
export default function Pagination({
  jobsPerPage,
  totalJobs,
  paginate,
  nextPage,
  prevPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(totalJobs);
  return (
    <div className="pagination-con">
      <nav>
        <ul className="pagination  justify-content-center">
          <li className="page-item">
            {/* <a className="page-link" href="#" onClick={() => prevPage()}>
              Previous
            </a> */}
          </li>
          {pageNumbers.map((num) => (
            <li className="page-item" key={num}>
              <a onClick={() => paginate(num)} href="#" className="page-link">
                {num}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => nextPage()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
