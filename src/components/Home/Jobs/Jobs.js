import React, { useState } from "react";
import Job from "./Job";
import "./index.css";
import Pagination from "./Pagination";
export default function Jobs({ jobs }) {
  // console.log(jobs);
  const [currentPage, setPage] = useState(1);
  const jobsPerPage = 20;

  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = jobs.jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setPage(pageNum);

  const nextPage = () => setPage((currentPage) => currentPage + 1);

  const prevPage = () => setPage((currentPage) => currentPage - 1);
  // console.log(jobs.jobs.length);
  return (
    <div className="jobs">
      {currentJobs.map((job) => (
        <Job /* key={job.title} */ job={job} />
      ))}
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.jobs.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
