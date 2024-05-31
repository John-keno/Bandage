import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.gridContainer}>
      <div id={styles.img0}>
        <h6 className={styles.green}>5 Items</h6>
        <h2>FURNITURE</h2>
        <h6>5 Items</h6>
      </div>
      <div id={styles.img1}>
        <h6 className={styles.green}>5 Items</h6>
        <h2>FURNITURE</h2>
        <h6>5 Items</h6>
      </div>
      <div id={styles.img2}>
        <h6 className={styles.green}>5 Items</h6>
        <h2>FURNITURE</h2>
        <h6>5 Items</h6>
      </div>
      <div id={styles.img3}>
        <h6 className={styles.green}>5 Items</h6>
        <h2>FURNITURE</h2>
        <h6>5 Items</h6>
      </div>
    </div>
  );
}
