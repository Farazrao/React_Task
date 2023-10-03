import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
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
      </Box>
    </Layout>
  );
};

export default About;
