import Categories from "../components/Categories/Categories";
import Products from "../components/products/Products";

export default function HomePage() {
  return (
    <>
      <section className="sectionCategories">
        <Categories />
      </section>
      <section className="sectionProducts">
        <Products />
      </section>
    </>
  );
}
