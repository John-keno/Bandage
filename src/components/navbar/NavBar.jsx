import { Cart, Heart, PersonIcon, Search } from "../../icons/icons";
import styles from "./nav.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h3>Bandage</h3>
      </div>
      <div className={styles.listMenu}>
        <ul className="">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
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
        <div>
          <ul>
            <li>
              <a href="#">
                <button>
                  <PersonIcon />
                  Login / Register
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button>
                  <Search />
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button>
                  <Cart />
                  <small>1</small>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button>
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
