import React from "react";
import "./index.css";
/* import DetailsModal from "./DetailsModal"; */
import calcDays from "../../../helpers/calcDays";

function createMarkup(data) {
  return { __html: data };
}

export default function Job({ job }) {
  return (
    <div
      className="job"
      data-bs-toggle="modal"
      data-bs-target={`#jobModal${job.id}`}
    >
      <div className="logo">
        {/*  <img src={job.company_logo} alt="logo"></img> */}
        {job.category.label}
      </div>
      <div className="jobDetails">
        <p>{job.company.display_name}</p>
        <p>
          <b>{job.title}</b>
        </p>
        <p>{job.location.display_name}</p>
      </div>
      <div className="age">
        <p>
          <b>{job.contract_type}</b>
        </p>
        <p>{calcDays(job.created)}</p>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={`jobModal${job.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <div className="modal-header-top">
                  {job.title}
                  {/* <img src={job.logo} className="modal-img-top" alt="" /> */}
                </div>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <div dangerouslySetInnerHTML={createMarkup(job.description)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a
                href={job.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-primary">
                  Apply
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
