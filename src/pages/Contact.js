import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
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
        <Typography variant="h4">Contact My Resturant</Typography>
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
      <Box sx={{m:3, width:' 600px', ml :5,
      "@media (max-width:600px)":{
        width:'300px'
      }
    
    }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Detail
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 123456789
                  (Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "red", pt: 1 }} />{" "}
                  farazrajpoot15@gmail.com (Email)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "red", pt: 1 }} /> 5845879547 (Toll
                  free)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
