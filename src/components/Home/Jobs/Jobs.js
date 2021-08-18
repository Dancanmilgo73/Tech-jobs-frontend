import React, { useState } from "react";
import Job from "./Job";
import "./index.css";
import Pagination from "./Pagination";
import Nothing from "./Nothing";
export default function Jobs({ jobs, vals }) {
  const [currentPage, setPage] = useState(1);
  const jobsPerPage = 20;

  /*  console.log(vals); */
  if (vals.searchInput.length > 0) {
    jobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(vals.searchInput.toLowerCase())
    );
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find a job with that title
        </div>
      );
    }
  }
  if (vals.Seniority.length > 0) {
    if (vals.Seniority === "entry level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("entry") ||
          job.title.toLowerCase().includes("junior")
      );
    }
    if (vals.Seniority === "mid level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("experienced") ||
          job.title.toLowerCase().includes("mid")
      );
    }
    if (vals.Seniority === "senior level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("senior") ||
          job.title.toLowerCase().includes("expert")
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, our filter didn't seem to find that type of job,you can try
          checking each job
        </div>
      );
    }
  }
  if (vals.Location.length > 0) {
    if (vals.Location === "remote") {
      jobs = jobs.filter((job) =>
        job.location.display_name.toLowerCase().includes("remote")
      );
    }
    if (vals.Location === "rsa") {
      jobs = jobs.filter(
        (job) =>
          job.location.display_name.toLowerCase().includes("rsa") ||
          job.location.display_name.toLowerCase().includes("south africa")
      );
    }
    if (vals.Location === "kenya") {
      jobs = jobs.filter(
        (job) =>
          job.location.display_name.toLowerCase().includes("kenya") ||
          job.location.display_name.toLowerCase().includes("east africa")
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs for that location
        </div>
      );
    }
  }
  if (vals.selectedRadio.length > 0) {
    if (vals.selectedRadio === "permanent") {
      jobs = jobs.filter(
        (job) =>
          job.contract_type &&
          job.contract_type
            .toLowerCase()
            .includes("permanent".toLocaleLowerCase())
      );
    }
    if (vals.selectedRadio === "contract") {
      jobs = jobs.filter(
        (job) =>
          job.contract_type &&
          job.contract_type
            .toLowerCase()
            .includes("contract".toLocaleLowerCase())
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, our filter didn't seem to get that type of job, you can try
          checking each job
        </div>
      );
    }
  }
  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNum) => setPage(pageNum);

  const nextPage = () => setPage((currentPage) => currentPage + 1);

  const prevPage = () => setPage((currentPage) => currentPage - 1);
  // console.log(jobs.jobs.length);

  const displayPagination =
    jobs.length < 20 && jobs.length > 1 ? (
      <Nothing />
    ) : (
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    );

  return (
    <>
      <div className="jobs">
        {currentJobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
        {displayPagination}
      </div>
    </>
  );
}
