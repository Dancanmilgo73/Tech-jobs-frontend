/* import React from "react"; */
/* import { useEffect, useState } from "react";

export default function JobsGetter() {
  const [jobs, setJobs] = useState();
  const fetchJobs = async (API) => {
    const res = await fetch(API);
    const jobs = await res.json();
    setJobs(jobs);
    console.log(jobs);
  };
  useEffect(() => {
    fetchJobs(API);
  }, []);
  return null;
} */
/* const API = "https://job-listing-server.herokuapp.com/"; */
export default async function fetchJobs(API) {
  fetch(API).then((response) => response.json());
}
