import React from "react";
import Jobs from "../components/Home/Jobs/Jobs";
import Footer from "../components/Footer";
import Nav from "../components/Home/Nav";

export default function HomePage(jobs) {
  return (
    <div>
      <Nav />
      <Jobs jobs={jobs} />
      <Footer />
    </div>
  );
}
