import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Brands from "../components/Brands";
import MiddleSection from "../components/SplitScrollSection";
import AboutUs from "../components/AboutUs";

export default function Index() {
  return (
    <>
      <Hero />
      <MiddleSection />
      <Shop />
      <AboutUs />
      <Brands speedMs={18000} />
    </>
  );
}
