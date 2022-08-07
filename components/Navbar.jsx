import React from "react";
import { useState } from "react";
import styles from '../styles/Nav.module.scss'
import Link from "next/link";
import Image from "next/image";
import blackLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-black.svg";
import whiteLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-white.svg";
import Hamburger from "hamburger-react";
import { GrMap } from "react-icons/gr";
import Menu from "./Menu";

const Navbar = () => {  
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false)

  const handleNav = () => { 
    setNav(!nav);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <Link href="/">
          <Image
            src={blackLogo} 
            alt="Logo Adriane M Fleuriste Paris black"
            width="200"
          />
        </Link>
        <div className={styles.navlinkicon}>
          <div>
            <GrMap size={20} />
          </div>
          <div
            className={
              nav
                ? styles.navopen
                : styles.navclosed
            }
          >
          <Menu isOpen={isOpen}/>
          </div>
          <div onClick={handleNav} className="block z-10">
          {nav ? (
              <Hamburger toggled={isOpen} toggle={setOpen} size={20} zindex={1000} color="#fff" duration={1} rounded/>
            ) : (
              <Hamburger toggled={isOpen} toggle={setOpen} size={20} zindex={1000} duration={1.3} rounded/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
 