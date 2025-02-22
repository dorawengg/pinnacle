import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center mx-auto text-xl max-w-screen-xl mt-[1%] ml-20 mr-20">
      {/* Logo */}
      <div className="w-[35%]">
        <a href="/">
          <div>LOGO</div>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="text-lg">
        <ul className="flex flex-row space-x-4">
          <li>
            <a
              href="/"

            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/Consulting"

            >
              Consulting
            </a>
          </li>
          <li>
            <a
              href="/Tutoring"
            >
              Tutoring & Test Prep
            </a>
          </li>
          <li>
            <a
              href="/Team"
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href="/Contact"
            >
              Contact Us
            </a>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default Navbar;
