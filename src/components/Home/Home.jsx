import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Query from "../Query/Query";

const Home = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="my-16 px-10">
        <Banner></Banner>
      </div>
      <Query></Query>
      <Footer></Footer>
    </div>
  );
};

export default Home;
