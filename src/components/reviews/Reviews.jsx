import ReviewsStars from "../ui/ReviewsStars";
import styles from "./reviews.module.css";
export default function Reviews() {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.cards}>
        <div className={styles.reviewsCard1}>
          <h3 className={styles.title}>What the say About us</h3>
          <div className={styles.card1Items}>
            <div className={styles.items}>
              <img src="/reviewer-image.png" alt="image" />
            </div>
            <div className={styles.items}>
              <ReviewsStars stars={4} />
            </div>
            <div className={styles.items} style={{ color: "var(--gray)" }}>
              <h6>
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </h6>
            </div>
            <div className={styles.items}>
              <div>
                <a style={{ color: "var(--button-blue)" }} href="#">
                  Regina Miles
                </a>
                <h6 style={{ color: "var(--yankee-blue)" }}>Designer</h6>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.reviewsCard2}>
          <div className={styles.items}>
            <img src="/rev-sec-img-1.png" alt="image" />
            <img src="/rev-sec-img-2.png" alt="image" />
            <img src="/rev-sec-img-3.png" alt="image" />
            <img src="/rev-sec-img-4.png" alt="image" />
            <img src="/rev-sec-img-5.png" alt="image" />
            <img src="/rev-sec-img-6.png" alt="image" />
            <img src="/rev-sec-img-7.png" alt="image" />
            <img src="/rev-sec-img-8.png" alt="image" />
            <img src="/rev-sec-img-9.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
