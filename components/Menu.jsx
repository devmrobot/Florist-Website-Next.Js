import React from "react";
import Link from "next/link";
import { internalLinks } from "../pages/data";
import styles from "../styles/Menu.module.scss";
import { motion } from "framer-motion";

const Menu = ({ isOpen }) => {
  return (
    <div className={styles.menu}>
      {isOpen &&
      <ul>
        {internalLinks.map((item, i) => (
            <motion.li
              initial={{ opacity: 1, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            >
              <a href={item.url} key={item.id}>
                {item.title}
              </a>
              {/* <img src={item.img}/> */}
            </motion.li>
          ))}
      </ul>
      }
    </div>
  );
};

export default Menu;
