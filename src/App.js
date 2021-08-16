import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import "./index.css";
const API = "https://job-listing-server.herokuapp.com/";
export default function App() {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [jobs, setJobs] = useState([]);

  /* fetch jobs helper function */
  const fetchJobs = async (API_URL) => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(API_URL);
      const jobs = await res.json();
      setJobs(jobs);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs(API);
  }, []);
  if (isError) return <h3>Error, retry...</h3>;
  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div>
      <HomePage jobs={jobs} />
    </div>
  );
}
