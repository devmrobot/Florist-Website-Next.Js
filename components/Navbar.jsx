import React from "react";
import { useState } from "react";
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
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1600px] m-auto flex justify-between items-center p-4">
        <Link href="/">
          <Image
            src={blackLogo}
            alt="Logo Adriane M Fleuriste Paris black"
            width="320"
          />
        </Link>
        <div className="flex justify-between items-center gap-6">
          <div>
            <GrMap size={35} />
          </div>
          <div onClick={handleNav} className="block z-10">
          {nav ? (
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} color="#fff" rounded/>
            ) : (
              <Hamburger toggled={isOpen} toggle={setOpen} size={30} rounded/>
            )}
          </div>
          <div
            className={
              nav
                ? "absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white transition-transform"
                : "absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center text-white transition-transform"
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
