import { internalLinks } from "../data/data";
import Title from "./Title";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/Menu.module.scss";

const Menu = ({ isOpen }) => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div>
      <ul>
        {internalLinks.map((internalLink, i) => (
          <Title key={internalLink.id} internalLink={internalLink} i={i} isOpen={isOpen} textEnter={textEnter} textLeave={textLeave} />
        ))}
      </ul>
      <motion.div
        className={styles.cursor}
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Menu;
