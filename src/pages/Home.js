import React from "react";
import Layout from "../components/Layout/Layout";

// import Banner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";
import HomeSlider from "../components/Layout/HomeSlider";
const Home = () => {
  return (
    <Layout>
      <HomeSlider />
      {/* style={{backgroundImage: `url(${Banner})`}}  */}
    </Layout>
  );
};

export default Home;
