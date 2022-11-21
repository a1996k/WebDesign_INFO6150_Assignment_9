import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import axios from "axios";
import classes from "./About.module.css";

const About = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/user/getAll");
      console.log(data.data.data);
      setusers(data.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <PageCard
        title={"College of Engineering About"}
        desc={
          "Annual Reports : The Annual Report highlights research and education initiatives as well as faculty and student accomplishments. There is a an Annual Report for the overall College of Engineering, as well as one for each of the five engineering departments. The College of Engineering houses engineering departments in core disciplines focused on research and education, as well as in applied areas of study. Departments collaborate across the college and the university, providing students an interdisciplinary education. Additional graduate offerings are available through the Gordon Institute of Engineering Leadership. Additional undergraduate program offerings are available through the Lowell Institute School, part of Northeasterns College of Professional Studies."
        }
      />
      <div className={classes.cardContainer}>
        {users.map((element) => (
          <UserCard email={element.email} />
        ))}
      </div>
    </div>
  );
};

const UserCard = ({ email }) => {
  return <div className={classes.card}>{email}</div>;
};

export default About;
