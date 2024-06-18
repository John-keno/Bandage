import { Facebook, Instagram, Twitter } from "../../icons/icons";
import Button from "../ui/Button";
import Input from "../ui/Input";
import styles from "./footer.module.css";
export default function Footer() {
  function handleSubmit(event) {
    event.preventDefault();
    event.target.reset(); // Clear the input value
  }

  return (
    <footer>
      <div className={styles.footerContainer}>
        <section className={styles.title}>
          <div className={styles.text}>
            <h3>Bandage</h3>
          </div>
          <div className={styles.icons}>
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </section>
        <section className={styles.items}>
          <div className={styles.itemsContainer}>
            <div className={styles.itemTitle}>
              <div>
                <h5>Company Info</h5>
              </div>
              <div className={styles.itemDetails}>
                <div>
                  <a href="#">About Us</a>
                </div>
                <div>
                  <a href="#">Carrier</a>
                </div>
                <div>
                  <a href="#">We are hiring</a>
                </div>
                <div>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
            <div className={styles.itemTitle}>
              <div>
                <h5>Legal</h5>
              </div>
              <div className={styles.itemDetails}>
                <div>
                  <a href="#">About Us</a>
                </div>
                <div>
                  <a href="#">Carrier</a>
                </div>
                <div>
                  <a href="#">We are hiring</a>
                </div>
                <div>
                  <a href="#">Blog</a>
                </div>
              </div>
            </div>
            <div className={styles.itemTitle}>
              <div>
                <h5>Features</h5>
              </div>
              <div className={styles.itemDetails}>
                <div>
                  <a href="#">Business Marketing</a>
                </div>
                <div>
                  <a href="#">User Analytic</a>
                </div>
                <div>
                  <a href="#">Live Chat</a>
                </div>
                <div>
                  <a href="#">Live Chat</a>
                </div>
              </div>
            </div>
            <div className={styles.itemTitle}>
              <div>
                <h5>Resources</h5>
              </div>
              <div className={styles.itemDetails}>
                <div>
                  <a href="#">IOS & Android</a>
                </div>
                <div>
                  <a href="#">Watch a Demo</a>
                </div>
                <div>
                  <a href="#">Customers</a>
                </div>
                <div>
                  <a href="#">API</a>
                </div>
              </div>
            </div>
            <div className={styles.itemTitle}>
              <div>
                <h5>Get In Touch</h5>
              </div>
              <div>
                <form className={styles.subcribe} onSubmit={handleSubmit}>
                  <Input
                    style={{ borderRadius: "5px 0 0 5px" }}
                    placeholder="Your Email"
                    type="email"
                  />
                  <Button type="submit" style={{ borderRadius: "0 5px 5px 0", padding: '10px' }}>
                    Subscribe
                  </Button>
                </form>
                <small style={{ color: "var(--gray)", textAlign: 'left', fontSize: '10px' }}>
                  Lore imp sum dolor Amit
                </small>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.bottomBanner}>
          <div className={styles.item}>
            <h6 style={{ color: "var(--gray)" }}>
              Made With Love and Passion By Johkode All Right Reserved{" "}
            </h6>
          </div>
        </section>
      </div>
    </footer>
  );
}
