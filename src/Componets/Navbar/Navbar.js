import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="item">
          <Link className="link" to="/product/1">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/product/2">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/3">
            Children
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            Accessories
          </Link>
        </div>
      </div>



      <div className="center">
        <h1>STORE</h1>
      </div>

      
      <div className="right">
        <div className="item">
          <Link className="link" to="product/4">
            Home
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            Contact
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            <SearchIcon />
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            <PersonOutlineIcon />
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="product/4">
            <FavoriteBorderIcon />
          </Link>
        </div>
        <div className="cart-icon">
          <Link className="link" to="product/4">
            <ShoppingCartOutlinedIcon />
          </Link>
          <span id="cart">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
