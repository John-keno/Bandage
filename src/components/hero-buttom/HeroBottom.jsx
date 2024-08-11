import Button from "../ui/Button";
import styles from "./heroButtom.module.css";

export default function HeroBottom() {
  return (
    <div className={styles.heroBottomContainer}>
      <div className={styles.heroBottomCard}>
        <div>
          <h6 style={{color: 'var(--button-blue)'}}>Designing Better Experience</h6>
        </div>
        <div>
          <h2>Problems trying to resolve<br></br> the conflict between</h2>
        </div>
        <div>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
        </div>
        <div>
          <h3 style={{color: 'var(--celadon-Green)'}}>$16.48</h3>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button className='btnMDFilled'>ADD YOUR CALL TO ACTION</Button>
        </div>
      </div>
    </div>
  );
}
