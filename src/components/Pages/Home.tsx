import FeaturedProducts from "../Home/FeaturedProducts";
import FilterProducts from "../Home/FilterProducts";
import Hero from "../Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <br />
      <FilterProducts />
      <br />
      <FeaturedProducts />
      <br />
    </div>
  );
}
