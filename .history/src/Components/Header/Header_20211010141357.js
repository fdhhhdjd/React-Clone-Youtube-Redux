import React, { useState } from "react";
import "./_header.scss";
import logo from "../../images/logo1.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleToggleSidebar }) => {
  const [input, setInput] = useState("");
  const { user } = useSelector((state) => state.auth);
  console.log(user);
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
      <Link to="/">
        <img src={logo} alt="" className="header__logo" />
      </Link>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <p style={{ marginTop: "1rem" }}>{user?.name}</p>
        <img src={user?.photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
