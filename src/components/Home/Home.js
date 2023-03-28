import React, { useState } from "react";
import Tiles from "../../../src/assets/Videos/tiles.mp4";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Home.css";

const Player = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      {/* <div className="HeaderContainer">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Our Brands
          </Button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Get In Touch
          </Button>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            About Us
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div> */}
      <video
        width="100%"
        height="100%"
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      >
       
        <source src={Tiles} type="video/mp4" />
      </video>
      {/* <div class="video-container">
        <video
          width="100%"
          height="100%"
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop
        >
          <source src={Tiles} type="video/mp4" />
        </video>
        <nav>
          <ul>
            <li>
              <a href="javascript:void(0)">Our Brands</a>
            </li>
            <div class="dropdown-content1">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <li>
              <a href="#">Get In Touch</a>
            </li>
            <div class="dropdown-content2">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <li>
              <a href="#">About Us</a>
            </li>
            <div class="dropdown-content3">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default Player;
