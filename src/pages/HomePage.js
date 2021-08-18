import React, { useState } from "react";
import Jobs from "../components/Home/Jobs/Jobs";
import Footer from "../components/Footer";
import Nav from "../components/Home/Nav";

const initialValues = {
  searchInput: "",
  Seniority: "",
  Location: "",
  selectedRadio: "",
};

export default function HomePage({ jobs }) {
  const [values, setValues] = useState(initialValues);

  const handleValues = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const clearVals = () => {
    setValues(initialValues);
  };

  return (
    <div>
      <Nav handleValues={handleValues} clearVals={clearVals} />
      <Jobs jobs={jobs} vals={values} />
      <Footer />
    </div>
  );
}
