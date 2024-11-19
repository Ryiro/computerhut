"use client";
import { FaHome } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeId, setActiveId] = useState(1);

  const handleItemClick = (id: number) => {
    setActiveId(id);
  };

  return (
    <div className="flex">
      <div className="navigation">
        <ul>
          <li
            className={`list ${activeId === 1 ? "active" : ""}`}
            onClick={() => handleItemClick(1)}
          >
            <Link href="/" prefetch={false}>
              <span className="icon">
                <FaHome className="w-7 h-7" name="home-outline" />
              </span>
              <span className="text">Home</span>
            </Link>
          </li>
          <li
            className={`list ${activeId === 2 ? "active" : ""}`}
            onClick={() => handleItemClick(2)}
          >
            <Link href="/Custom" prefetch={false}>
              <span className="icon">
                <FaComputer className="w-7 h-7" name="custom-outline" />
              </span>
              <span className="text">Customize</span>
            </Link>
          </li>
          <li
            className={`list ${activeId === 3 ? "active" : ""}`}
            onClick={() => handleItemClick(3)}
          >
            <Link href="/Parts" prefetch={false}>
              <span className="icon">
                <FaPuzzlePiece className="w-7 h-7" name="parts-outline" />
              </span>
              <span className="text">Parts</span>
            </Link>
          </li>
          <li
            className={`list ${activeId === 4 ? "active" : ""}`}
            onClick={() => handleItemClick(4)}
          >
            <Link href="/Support" prefetch={false}>
              <span className="icon">
                <FaHandsHelping className="w-7 h-7" name="support-outline" />
              </span>
              <span className="text">Support</span>
            </Link>
          </li>
          <li
            className={`list ${activeId === 5 ? "active" : ""}`}
            onClick={() => handleItemClick(5)}
          >
            <Link href="/About" prefetch={false}>
              <span className="icon">
                <FaUsers className="w-7 h-7" name="about-us-outline" />
              </span>
              <span className="text">About</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
