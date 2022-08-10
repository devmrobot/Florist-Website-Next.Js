import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Title.module.scss";

const Title = ({ internalLink, i, isOpen, textLeave, textEnter }) => {
  return (
    <div className={styles.title}>
      {isOpen && (
        <motion.li
          initial={{ opacity: 1, translateX: -50 }}
          animate={{ opacity: 1, translateX: 50 }}
          transition={{ duration: 1.5, delay: i * 0.1 }}
          className={styles.menuList}
        >
          <Link href={internalLink.url}>
            <a
              onMouseLeave={textLeave}
              onMouseEnter={textEnter}
              className={styles.menuTitle}
            >
              {internalLink.title}
            </a>
          </Link>
          {/* <img src={item.img} /> */}
        </motion.li>
      )}
      {!isOpen && (
        <ul>
          <motion.li
            initial={{ opacity: 1, translateX: 50 }}
            animate={{ opacity: 1, translateX: 200 }}
            transition={{ duration: 0.2, delay: i * 0.1 }}
            className={styles.menuList}
          >
            <Link href={internalLink.url}>
              <a
                onMouseLeave={textLeave}
                onMouseEnter={textEnter}
                className={styles.menuTitle}
              >
                {internalLink.title}
              </a>
            </Link>
            {/* <img src={item.img} /> */}
          </motion.li>
        </ul>
      )}
    </div>
  );
};

export default Title;
