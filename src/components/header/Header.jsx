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
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.content}>
          <button className={`${styles.container} ${styles.btnSM20}`}>
            <Phone />
            <h6>(225) 555-0118</h6>
          </button>
          <button className={`${styles.container} ${styles.btnSM20}`}>
            <Email />
            <h6>michelle.rivera@example.com</h6>
          </button>
        </div>
        <div>
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <h6>Follow Us : </h6>
            <ul>
              <li>
                <a href="#">
                  <Instagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <Youtube />
                </a>
              </li>

              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <Twitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
