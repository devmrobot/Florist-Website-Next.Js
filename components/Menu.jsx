import { internalLinks } from "../data/data";
import styles from "../styles/Menu.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = ({ isOpen }) => {
  return (
    <div className={styles.menu}>
      {isOpen && (
        <ul>
          {internalLinks.map((internalLink, i) => (
            <motion.li
              initial={{ opacity: 1, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
              key={internalLink.id}
            >
              <Link href={internalLink.url}>
                <a>{internalLink.title}</a>
              </Link>
              {/* <img src={item.img}/> */}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
