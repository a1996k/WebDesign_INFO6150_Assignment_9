import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import PageCard from '../../Components/PageCard/PageCard';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PageCard
        title={"Contact Page"}
        desc={
          "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of(The Extremes of Good and Evil) by Cicero, written in 45 BC."
        }
      />
    </div>
  );
}

export default Contact