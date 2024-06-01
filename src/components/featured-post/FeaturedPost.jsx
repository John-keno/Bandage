import { Link } from "react-router-dom";
import styles from "./featuredPost.module.css";
import blogImg1 from "../../assets/blog-image-1.svg";
import blogImg2 from "../../assets/blog-image-2.svg";
import blogImg3 from "../../assets/blog-image-3.svg";
import { ChevronRight, Clock, GrowthGraph } from "../../icons/icons";
export default function FeaturedPost() {
  return (
    <div className={styles.featContainer}>
      <div className={styles.title}>
        <h6 className={styles.blue}>Practice Advice</h6>
        <h2>Featured Posts</h2>
      </div>
      <div className={styles.postCard}>
        <div className={styles.item}>
          <div className={styles.tag}>
            <h6>NEW</h6>
          </div>
          <img src={blogImg1} alt="image" />
          <div className={styles.itemDetails}>
            <div className={styles.itemSmall}>
              <small className={styles.small1}>Google</small>
              <small className={styles.small}>Trending</small>
              <small className={styles.small}>New</small>
            </div>
            <h4 className={styles.itemH4}>
              Loudest à la Madison #1 (L&apos;integral)
            </h4>
            <div className={styles.iconSmall}>
              <div className={styles.iconSmallItem}>
                <Clock />
                <small className={styles.small}>22 April 2021</small>
              </div>
              <div className={styles.iconSmallItem}>
                <GrowthGraph />
                <small className={styles.small}>10 comments</small>
              </div>
            </div>
            <div className={styles.learnMore}>
              <h6>Learn More</h6>
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.tag}>
            <h6>NEW</h6>
          </div>
          <img src={blogImg2} alt="image" />
          <div className={styles.itemDetails}>
            <div className={styles.itemSmall}>
              <small className={styles.small1}>Google</small>
              <small className={styles.small}>Trending</small>
              <small className={styles.small}>New</small>
            </div>
            <h4 className={styles.itemH4}>
              Loudest à la Madison #1 (L&apos;integral)
            </h4>
            <div className={styles.iconSmall}>
              <div className={styles.iconSmallItem}>
                <Clock />
                <small className={styles.small}>22 April 2021</small>
              </div>
              <div className={styles.iconSmallItem}>
                <GrowthGraph />
                <small className={styles.small}>10 comments</small>
              </div>
            </div>
            <div className={styles.learnMore}>
              <h6>Learn More</h6>
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.tag}>
            <h6>NEW</h6>
          </div>
          <img src={blogImg3} alt="image" />
          <div className={styles.itemDetails}>
            <div className={styles.itemSmall}>
              <small className={styles.small1}>Google</small>
              <small className={styles.small}>Trending</small>
              <small className={styles.small}>New</small>
            </div>
            <h4 className={styles.itemH4}>
              Loudest à la Madison #1 (L&apos;integral)
            </h4>
            <div className={styles.iconSmall}>
              <div className={styles.iconSmallItem}>
                <Clock />
                <small className={styles.small}>22 April 2021</small>
              </div>
              <div className={styles.iconSmallItem}>
                <GrowthGraph />
                <small className={styles.small}>10 comments</small>
              </div>
            </div>
            <div className={styles.learnMore}>
              <h6>Learn More</h6>
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
