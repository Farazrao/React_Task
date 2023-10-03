import React, { useState } from "react";
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import SendToMobileIcon from "@mui/icons-material/SendToMobile";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "../../styles/HeaderStyles.css"
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "./Dropdown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  const [mobileOpen, setmobileOpen] = useState(false);
  const handleDrawerToggle=() =>{
    setmobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick ={handleDrawerToggle} sx={{textAlign:"center"}}>
         <Typography
              color={"black"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >              
              <SendToMobileIcon /> MOBILE24
            </Typography>
           
            <ul className="mobile-navigation">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                  <Link to={"/Menu"}>Menu
                  {dropdown ? (
                      <ExpandLessIcon sx={{ color: "black" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ color: "black" }} />
                    )}</Link>
                  {dropdown && <Dropdown />}
                </li>
              <li>
                  <Link
                  
                    onClick={toggleDropdown}
                    className={dropdown ? "active" : ""}
                  >
                    About
                    {dropdown ? (
                      <ExpandLessIcon sx={{ color: "black" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ color: "black" }} />
                    )}
                  </Link>
                  
                </li>
              <li>
                <Link to={"/Basicform"}>Login</Link>
              </li>

              <li>
                <Link to={"/MyData"}>MyData</Link>
              </li>
              <li>
                <Link to={"/FoodCardData"}>Today Food</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li>
                  <button className="search-button"> SUCHE
                    <SearchIcon />
                  </button>
                </li>

                <li>
                  <button className="header-button">MERKZETTEL (0)</button>
                </li>
            </ul>
         
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "White" }}>
          <Toolbar>
            <IconButton color="black" aria-label="open drawe" edge="start" sx={{mr:2, display:{sm:"none"}}} onClick={handleDrawerToggle}>
              <MenuIcon/>
            </IconButton>
            <Typography
              color={"black"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >              
              <SendToMobileIcon /> MOBILE24
            </Typography>
            <Box sx={{display:{xs:"none", sm:"block"}}}>
            <ul className="navigation-menu">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                  <Link to={"/Menu"}>Menu
                  {dropdown ? (
                      <ExpandLessIcon sx={{ color: "black" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ color: "black" }} />
                    )}</Link>
                  {dropdown && <Dropdown />}
                </li>
              <li>
                  <Link
                  
                    onClick={toggleDropdown}
                    className={dropdown ? "active" : ""}
                  >
                    About
                    {dropdown ? (
                      <ExpandLessIcon sx={{ color: "black" }} />
                    ) : (
                      <ExpandMoreIcon sx={{ color: "black" }} />
                    )}
                  </Link>
                  
                </li>
              <li>
                <Link to={"/Basicform"}>Login</Link>
              </li>
              <li>
                <Link to={"/MyData"}>MyData</Link>
              </li>
              <li>
                <Link to={"/FoodCardData"}>Today Food</Link>
              </li>
              <li>
                <Link to={"/Contact"}>Contact</Link>
              </li>
              <li>
                  <button className="search-button"> SUCHE
                    <SearchIcon />
                  </button>
                </li>

                <li>
                  <button className="header-button">MERKZETTEL (0)</button>
                </li>
            </ul>
          </Box>
          </Toolbar>
        </AppBar>
        <Box component="view">
            <Drawer variant="temporary" open={mobileOpen}
            onClose={handleDrawerToggle}sx={{display:{xs:"block", sm:"none"}, "& .MuiDrawer-paper":{boxSizing:"border-box", width:"140px"}}}
            >
                  {drawer}
            </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
