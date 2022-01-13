import React from "react";
import { useState, useEffect } from "react";
import "./NavBar.scss";
import { useMediaQuery } from "react-responsive";

import { elastic as Menu } from "react-burger-menu";
import { NavHashLink } from "react-router-hash-link";

const NavBar = (props) => {
  let [scroll, setScroll] = useState(false);
  let [openToggle, setOpenToggle] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const links = [
    {
      label: "Home",
      value: "/#home",
    },
    {
      label: "About",
      value: "/#about",
    },
    {
      label: "Education",
      value: "/#education",
    },
    {
      label: "Skills & Knowledge",
      value: "/#skills",
    },
    {
      label: "Projects",
      value: "/#projects",
    },
    {
      label: "Contact",
      value: "/#contact",
    },
  ];

  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const handleNavClick = () => {
    setOpenToggle(false);
  };

  const handleStateChange = (state) => {
    setOpenToggle(state.isOpen);
  };

  return (
    <>
      <div
        style={
          props.disabled ? { pointerEvents: "none", filter: "blur(0.7px)" } : {}
        }
        className={scroll && !isTabletOrMobile ? "nav navShadow" : "nav"}
      >
        <NavHashLink smooth to="/#home">
          <span className="logo">y</span>
        </NavHashLink>

        {isTabletOrMobile ? (
          <Menu
            {...props}
            right
            isOpen={openToggle}
            onStateChange={(state) => handleStateChange(state)}
          >
            {links.map((link, index) => {
              return (
                <NavHashLink
                  onClick={handleNavClick}
                  scroll={(el) => scrollWidthOffset(el)}
                  key={index}
                  className="menu-item"
                  smooth
                  to={link.value}
                >
                  {link.label}
                </NavHashLink>
              );
            })}
          </Menu>
        ) : (
          <div className="desktopNav">
            {links.map((link, index) => {
              return (
                <NavHashLink
                  scroll={(el) => scrollWidthOffset(el)}
                  key={index}
                  className="menu-item"
                  smooth
                  to={link.value}
                >
                  {link.label}
                </NavHashLink>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
