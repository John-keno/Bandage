import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import FeaturedPost from "../components/featured-post/FeaturedPost";
import Reviews from "../components/reviews/Reviews";
import HeroBottom from "../components/hero-buttom/HeroBottom";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="sectionProducts">
        <Products showButton />
      </section>
      <section className="sectionServices">
        <Services />
      </section>
      <section className="sectionFeatPost">
        <FeaturedPost/>
      </section>
      <section className="sectionReviews">
        <Reviews/>
      </section>
      <section className="sectionHeroBottom">
        <HeroBottom/>
      </section>
    </>
  );
}
