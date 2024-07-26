//import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import "./styles/header.css";
import Logo from "./../../assets/FAST.ico";
//import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import FormPost from '../../components/home/FormPost';
//import { useSocket } from '../../hooks/useSocket';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [isCloseForm, setIsCloseForm] = useState(true);

  const location = useLocation();

  const navigate = useNavigate();

  function handleImageClick() {
    setShowMenu(!showMenu);
  }

  // const { socket } = useSocket("http://localhost:3000");

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  let user1 = "";

  const handleCreatePost = () => {
    setIsCloseForm(false);
  };

  //sm:  md: lg:

  return (
    <div>
      <header className="flex text-white items-center bg-violet-400 h-[60px]">
        <div className="flex justify-start items-center">
          <div className="flex">
            <img
              src={Logo}
              alt="Logo"
              className="h-[20px] md:h-[30px] lg:h-[40px] px-2"
            />
            <p className="flex items-center font-bold text-[10px] md:text-[15px] lg:text-[20px]">
              <span className="text-black text-[10px]">FAST </span>
              <span className="text-[10px]">///</span>
              <span className="text-amber-400 text-[10px]">programming</span>
            </p>
          </div>
        </div>
        <div className="flex-grow text-base md:text-lg lg:text-xl">
          <p className="text-center text-white text-[10px] md:text-lg lg:text-xl">
            FAST PROGRAMMING
            <div>
              <span className="font-bold"> FOR</span> BUSY PROGRAMMERS
            </div>
          </p>
        </div>
      </header>

      <div className="bg-black h-[60px] flex justify-end  items-center">
        <nav>
          <ul className="flex justify-center">
            <li
              className={`text-white flex items-center font-bold mx-4 p-2 ${
                location.pathname === "/"
                  ? "opacity-50 pointer-events-none"
                  : ""
              }`}
            >
              <Link className="text-white font-bold" to="/">
                Home
              </Link>
            </li>

            {location.pathname !== "/documentation" && (
              <li className="text-white font-bold p-2">
                <Link className="text-white mx-4 font-bold" to="/documentation">
                  DOCUMENTATION
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
