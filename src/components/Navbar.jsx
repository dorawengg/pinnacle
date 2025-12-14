import logo from "../assets/pinnacleLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center mx-auto text-xl max-w-screen-xl mt-[1%] ml-20 mr-20">
      {/* Logo */}
      <div className="w-[35%]">
        <Link to="/">
          <img src={logo} alt="Pinnacle Edu Logo" className="h-10" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="text-lg">
        <ul className="flex flex-row space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Consulting">Consulting</Link></li>
          <li><Link to="/Tutoring">Tutoring & Test Prep</Link></li>
          <li><Link to="/Team">Our Team</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
