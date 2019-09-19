import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";



const Navbar = () => (
  <UserConsumer>
    { user => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/user/profile">
          <Menu.Item>
            {user.firstName}
          </Menu.Item>
        </NavLink>
      </Menu>
    )}
  </UserConsumer>
);

export default Navbar;