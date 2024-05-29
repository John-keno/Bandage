import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Twitter,
  Youtube,
} from "../../icons/icons";
import NavBar from "../navbar/NavBar";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.content}>
          <div className={styles.phoneNumber}>
            <Phone />
            <h6>(225) 555-0118</h6>
          </div>
          <div className={styles.email}>
            <Email />
            <h6>michelle.rivera@example.com</h6>
          </div>
        </div>
        <div>
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className={styles.phoneNumber}>
          <div className={styles.item}>
            <h6>Follow Us : </h6>
            <div className={styles.socials}>
              <Instagram />
              <Youtube />
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
