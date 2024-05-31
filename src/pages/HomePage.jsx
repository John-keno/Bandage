
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="sectionProducts">
        <Products />
      </section>
    </>
  );
}
