import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PageCard from "../../Components/PageCard/PageCard";
import classes from "./Home.module.css";
import axios from "axios";

const Home = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
  });
  const [message, setmessage] = useState("");

  const change = (e) => {
    const temp = { ...data };
    temp[e.target.name] = e.target.value;
    setdata(temp);
  };

  const submit = async () => {
    try {
      const apiData = await axios.post(
        "http://localhost:8080/user/login",
        data
      );
      setmessage(apiData.data.data.message);
      console.log(apiData.data.data.message);
    } catch (error) {
      console.log(error.response);
      setmessage(error.response.data.error);
    }
  };

  return (
    <div>
      <Navbar />
      <PageCard
        title={"Home Page"}
        desc={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of(The Extremes of Good and Evil) by Cicero, written in 45 BC."
        }
      />
      <div className={classes.inputContainer}>
        <input
          className={classes.Input}
          name="email"
          type="email"
          placeholder="email@northeastern.com"
          value={data.email}
          onChange={change}
        />
        <input
          password="*#######S"
          type="password"
          className={classes.Input}
          name="password"
          placeholder="Enter Password"
          value={data.password}
          onChange={change}
        />
        <button onClick={submit} className={classes.Submit}>
          Submit
        </button>
        <br />
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Home;
