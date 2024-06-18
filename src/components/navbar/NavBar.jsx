import { Link } from "react-router-dom";
import {
  Cart,
  ChevronDown,
  Heart,
  PersonIcon,
  Search,
  ShoppingCart,
} from "../../icons/icons";
import styles from "./navBar.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
export default function NavBar() {
  const { amount } = useSelector((state) => state.cart);
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  return (
    <nav>
      <div className={styles.brand}>
        <h3>Bandage</h3>
        <ul className={styles.navSmallItems}>
          <li>
            <a href="#">
              <button className={[styles.btnSM20, styles.navBtn].join(" ")}>
                <Search />
              </button>
            </a>
          </li>
          <li>
            <a href="/shop/cart">
              <button className={[styles.btnSM20, styles.navBtn].join(" ")}>
                <ShoppingCart />
                <small>{amount == 0 ? "" : amount}</small>
              </button>
            </a>
          </li>
          <li>
            <button
              className={[styles.hamburger, `${toggleNavMenu ? styles.notActive : styles.active}`].join(" ") }
              onClick={() => setToggleNavMenu(!toggleNavMenu)}
            >
              <div className={styles.bar}></div>
            </button>
          </li>
        </ul>
      </div>

      <div
        className={[styles.listMenu, `${toggleNavMenu ? styles.notActive : styles.active}`].join(
          " "
        )}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <button className={styles.btnSM20} style={{ padding: "0px" }}>
              <a href="#" style={{ color: "var(--yankee-blue)" }}>
                Shop
              </a>
              <ChevronDown />
            </button>
            <div className={styles.dropdownContent}>
              <Link to="/shop/cart">Cart</Link>
            </div>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>
        <div className={styles.ulButton}>
          <ul>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <PersonIcon />
                  Login / Register
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <Search />
                </button>
              </a>
            </li>
            <li>
              <a href="/shop/cart">
                <button className={styles.btnSM20}>
                  <Cart />
                  <small>{amount}</small>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <Heart />
                  <small>1</small>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
