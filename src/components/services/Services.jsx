import Container from "../ui/Container";
import styles from "./services.module.css";
import { BookWithDot, CarbonBook, GrowthArrow } from "../../icons/icons";

export default function Services() {
  return (
    <Container title="THE BEST SERVICES" showDefaults>
      <div className={styles.cards}>
        <div className={styles.item}>
          <BookWithDot />
          <h3>EASY WINS</h3>
          <p>Get your best looking smile now!</p>
        </div>
        <div className={styles.item}>
          <CarbonBook />
          <h3>Concrete</h3>
          <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
        </div>
        <div className={styles.item}>
          <GrowthArrow />
          <h3>Hack Growth</h3>
          <p>Overcame any hurdle or any other problem.</p>
        </div>
      </div>
    </Container>
  );
}
