import React from "react";
import { Box, Typography } from "@mui/material";
import "../../styles/Footer.css"; // Import the CSS file
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Footer = () => {
  return (
    <>
      <Box className="footer-container">
        <Typography className="mobile24-text">Mobile24
        <p>SMARTPHONE ONLINE SHOP</p>
        </Typography>
        <div className="newsletter-container">
          <Typography className="newsletter-text">Newsletter</Typography>

          <div className="button-container">
            
            <div className="Email-text" > <ForwardToInboxIcon className="forward-icon" />E-Mail-Address eingeben</div>
            <button className="button">Button 2</button>
          </div>
        </div>
      </Box>
    </>
  );
};
export default Footer;
