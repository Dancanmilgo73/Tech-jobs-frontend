import React, { useState } from "react";
import Job from "./Job";
import "./index.css";
import Pagination from "./Pagination";
export default function Jobs({ jobs, vals }) {
  const [currentPage, setPage] = useState(1);
  const jobsPerPage = 20;

  // console.log(jobs);
  if (vals.searchInput.length > 0) {
    jobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(vals.searchInput.toLowerCase())
    );
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  if (vals.Seniority.length > 0) {
    if (vals.Seniority === "Entry_level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("entry") ||
          job.title.toLowerCase().includes("junior")
      );
    }
    if (vals.Seniority === "Mid_level") {
      jobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes("experienced") ||
          job.title.toLowerCase().includes("mid")
      );
    }
  }
  if (vals.Location.length > 0) {
    if (vals.Location === "Remote") {
      jobs = jobs.filter((job) =>
        job.location.toLowerCase().includes("remote")
      );
    }
    if (vals.Location === "Usa") {
      jobs = jobs.filter(
        (job) =>
          job.location.toLowerCase().includes("usa") ||
          job.location.toLowerCase().includes("america")
      );
    }
    if (vals.Location === "Kenya") {
      jobs = jobs.filter(
        (job) =>
          job.location.toLowerCase().includes("kenya") ||
          job.location.toLowerCase().includes("east africa")
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
        </div>
      );
    }
  }
  if (vals.selectedRadio.length > 0) {
    if (vals.selectedRadio === "Full time") {
      jobs = jobs.filter((job) =>
        job.type.toLowerCase().includes("Full time".toLowerCase())
      );
    }
    if (vals.selectedRadio === "Part time") {
      jobs = jobs.filter((job) =>
        job.type.toLowerCase().includes("Part time".toLowerCase())
      );
    }
    if (jobs.length === 0) {
      return (
        <div className="alert alert-secondary" role="alert">
          Sorry, We didn't find any jobs
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

  const displayPagination = jobs.length > 20 && (
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
          <Job /* key={job.title} */ job={job} />
        ))}
        {displayPagination}
      </div>
    </>
  );
}
