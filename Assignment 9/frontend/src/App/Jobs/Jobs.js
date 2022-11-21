import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"College of Engineering Jobs Page"}
        desc={
          "The College of Engineering offers more than 65 undergraduate and graduate engineering degree programs at the BS, MS, and PhD level, as well as a wide range of minors and graduate certificates, including the Gordon Engineering Leadership Program which can be combined with any masters degree. Undergraduate students enrolled at Northeastern can participate in the PlusOne accelerated masters degree program. In addition to our Boston campus, some graduate programs are offered throughout the global university network."
        }
      />
    </div>
  );
};

export default Jobs;
