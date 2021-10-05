import React, { useState } from "react";
import "./_header.scss";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="header ">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleToggleSidebar()}
      />

      <img src={logo} alt="" className="header__logo" />

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Pu_NxYfQGKQAX-_34BE&_nc_ht=scontent.fsgn2-2.fna&oh=75ceec2e9dca1142c43c0419a7fee27a&oe=6182AD9E"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
