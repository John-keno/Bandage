import Button from "../ui/Button";
import styles from "./products.module.css";
export default function Products() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className={styles.productCard}>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src="/card-cover-8.svg" alt="img" />
          <div className={styles.details}>
            <h5>Graphic design</h5>
            <a href="#">English Department</a>
            <div className={styles.prices}>
              <h5 className={styles.priceLeft}>$16.48</h5>
              <h5 className={styles.priceRight}>$6.48</h5>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnDiv}>
        <Button className={styles.btnMD}>Load More Products</Button>
      </div>
    </div>
  );
}
