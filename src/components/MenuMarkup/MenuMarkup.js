import React from "react";
import { Link } from "react-router-dom";
import Menu from "antd/lib/menu";
import "antd/lib/menu/style/css";

const MenuMarkup = ({ onLinkClick, className }) => (
  <div id="menu-container">
    <Menu
      id="hide-on-mobile"
      theme={"dark"}
      mode={"horizontal"}
      className={className}
      style={{}}
    >
      <Menu.Item style={{ float: "right" }} key="/">
        <Link onClick={onLinkClick} to="/">
          Admin
        </Link>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }} key="/about">
        <Link onClick={onLinkClick} to="/about">
          My Account
        </Link>
      </Menu.Item>
      <Menu.Item style={{ float: "right" }} key="/topics">
        <Link onClick={onLinkClick} to="/topics">
          Home
        </Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default MenuMarkup;
