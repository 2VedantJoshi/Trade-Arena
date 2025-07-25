import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {

  const [selectedMenu,setSelectedMenu] = useState(0);
  const [isProfileOpen,setIsProfileOpen] =useState(false);

  const handleMenuClicks = async (index)=>{
    setSelectedMenu(index);
  };

  const handleProfileClicks = (index)=>{
    setIsProfileOpen(!isProfileOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "selected menu";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt=""/>
      <div className="menus">
        <ul>
          <li>
            <Link to="/" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
            </li>
          <li>
            <Link to="/holdings" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
            </li>
          <li>
            <Link to="/positions" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link to="/funds" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>          </li>
          <li>
          <Link to="/apps" style={{textDecoration:"none"}} onClick={() => handleMenuClicks(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClicks} >
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
