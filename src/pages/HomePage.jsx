import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Products from "../components/products/Products";
import FeaturedPost from "../components/featured-post/FeaturedPost";
import Reviews from "../components/reviews/Reviews";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="sectionProducts">
        <Products />
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
    </>
  );
}
