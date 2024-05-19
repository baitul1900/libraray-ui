import { useState } from "react";
import LoginLogout from "./LoginLogout";
import "./Navbar.css";

const Header = () => {
  const [isLogedIn, checkisLogedIn] = useState(false);

  const handleChange = () => {
    checkisLogedIn(!isLogedIn);
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">React</div>

        <div className="loginLogout">
          <LoginLogout
            userLoginStatus={isLogedIn}
            handleChange={handleChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
