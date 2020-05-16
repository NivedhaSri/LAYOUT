import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      
        <section>
        <nav>
    <ul>
    <aside>
      <li><a href="#" target="_self">Contact</a></li>
      <li><a href="#">Company profile</a></li>
      </aside>
    </ul>
  </nav>
  </section>
    </Menu>
  );
};