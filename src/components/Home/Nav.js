import React from "react";
import "./index.css";

export default function Nav({ handleValues, clearVals }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValues(name, value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    /*  setValues(initialValues); */
    clearVals();
    document.getElementById("formId").reset();
  };

  return (
    <div className="nav-con" id="search">
      <div>
        <h4>TECH JOBS</h4>
      </div>
      <div className="search-box">
        <form id="formId">
          <div className="search-bar">
            {/*  <div className="haha"> */}
            <input
              className="input-bar"
              type="text"
              placeholder="Search by title..."
              name="searchInput"
              onChange={handleChange}
            />

            <span>
              <i className="bi bi-search"></i>
            </span>
            {/* </div> */}
            <button
              className="btn btn-success"
              onClick={handleClick}
              type="submit"
            >
              <i className="bi bi-arrow-clockwise">Clear Search</i>
            </button>
          </div>
          <div className="select-field">
            <select onChange={handleChange} defaultValue="" name="Seniority">
              <option value="">Seniority</option>
              <option value="Entry_level">Entry Level</option>
              <option value="Mid_level">Mid-level</option>
              <option value="Senior_level">Senior-level</option>
            </select>
            <select onChange={handleChange} defaultValue="" name="Location">
              <option value="">Location</option>
              <option value="Remote">Remote</option>
              <option value="Usa">USA</option>
              <option value="Kenya">Kenya</option>
            </select>
            <div className="form-check">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedRadio"
                  value="Full time"
                  onChange={handleChange}
                />
                <label className="form-check-label">Full Time</label>
              </div>

              <div /* className="form-check" */>
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedRadio"
                  value="Part time"
                  onChange={handleChange}
                />
                <label className="form-check-label">Part Time</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
