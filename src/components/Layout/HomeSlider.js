import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../../images/banner.jpeg";
import Biryani from "../../images/bryani.jpeg";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Slider from "react-slick"; // Rename HomeSlider to Slider

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 1,
          "& h4": {
            fontWeight: "bold",
            my: 1,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcom to my Resturant</Typography>
        <p>Best food in Germany</p>
      </Box>

      <Slider {...settings}>
        {" "}
        {/* Use the renamed Slider component */}
        <div className="card">
          <img src={Banner} alt="" className="w-100" />
        </div>
        <div className="card">
          <img src={Biryani} alt="" className="w-100" />
        </div>
        <div className="card">
          <h3>3</h3>
        </div>
        <div className="card">
          <h3>4</h3>
        </div>
        <div className="card">
          <h3>5</h3>
        </div>
        <div className="card">
          <h3>6</h3>
        </div>
      </Slider>
      {/* Apply the container styles */}
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 1,
          "& h4": {
            fontWeight: "bold",
            my: 1,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcom to my Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          rhoncus urna. Fusce id quam sed massa finibus cursus id id justo. Ut
          porta nulla arcu, sit amet fringilla nibh interdum eget. Maecenas a
          justo a elit vehicula dapibus sit amet in nisi. Maecenas sit amet
          sollicitudin libero. Donec ultricies lectus facilisis nisi efficitur,
          eget congue mauris porta. Vestibulum vehicula scelerisque velit et
          sagittis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Pellentesque quis felis placerat,
          aliquet tellus ut, accumsan sapien.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
          rhoncus urna. Fusce id quam sed massa finibus cursus id id justo. Ut
          porta nulla arcu, sit amet fringilla nibh interdum eget. Maecenas a
          justo a elit vehicula dapibus sit amet in nisi. Maecenas sit amet
          sollicitudin libero. Donec ultricies lectus facilisis nisi efficitur,
          eget congue mauris porta. Vestibulum vehicula scelerisque velit et
          sagittis. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Pellentesque quis felis placerat,
          aliquet tellus ut, accumsan sapien.
        </p>
        <div className="home">
          <div className="headerContainer">
            <Link to="/menu">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default HomeSlider;
