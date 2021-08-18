import React, { useState, useEffect } from "react";
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

  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <div className={show ? `nav-con` : ""} id="search">
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
              <option value="entry level">Entry Level</option>
              <option value="mid level">Mid-level</option>
              <option value="senior level">Senior-level</option>
            </select>
            <select onChange={handleChange} defaultValue="" name="Location">
              <option value="">Location</option>
              <option value="remote">Remote</option>
              <option value="rsa">RSA</option>
              <option value="kenya">Kenya</option>
            </select>
            <div className="form-check">
              <div>
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedRadio"
                  value="permanent"
                  onChange={handleChange}
                />
                <label className="form-check-label">Permanent</label>
              </div>

              <div /* className="form-check" */>
                <input
                  className="form-check-input"
                  type="radio"
                  name="selectedRadio"
                  value="contract"
                  onChange={handleChange}
                />
                <label className="form-check-label">Contract</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
