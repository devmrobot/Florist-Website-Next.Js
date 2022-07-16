import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import blackLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-black.svg"
import whiteLogo from "../public/assets/images/logo-adriane-m-fleuriste-paris-white.svg"
import Hamburger from 'hamburger-react'

const Navbar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <div>
      <div>
        <Link href="/">
          <Image
            src={blackLogo}
            alt="Logo Adriane M Fleuriste Paris black"
            width="320"
          />
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />

      </div>
    </div> 
  );
};

export default Navbar;
