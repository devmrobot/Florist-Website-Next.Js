import React from "react";
import { useState } from "react";
import styles from '../styles/Nav.module.scss'
import Link from "next/link";
import Image from "next/image";
import blackLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-black.svg";
import whiteLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-white.svg";
import Hamburger from "hamburger-react";
import { GrMap } from "react-icons/gr";

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
            width="320"
          />
        </Link>
        <div className={styles.navlinkicon}>
          <div>
            <GrMap size={35} />
          </div>
          <div onClick={handleNav} className="block z-10">
          {nav ? (
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#fff" duration={1} rounded/>
            ) : (
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} duration={1.3} rounded/>
            )}
          </div>
          <div
            className={
              nav
                ? styles.navopen
                : styles.navclosed
            }
          >
            <ul className="flex flex-col gap-20 text-4xl">
              <li>
                <Link href="/">Livraisons de fleurs</Link>
              </li>
              <li>
                <Link href="/">Bouquet du mois</Link>
              </li>
              <li>
                <Link href="/">Mariage</Link>
              </li>
              <li>
                <Link href="/">Evènements</Link>
              </li>
              <li>
                <Link href="/">Abonnements</Link>
              </li> 
              <li>
                <Link href="/">Terrasses & Balcons</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
