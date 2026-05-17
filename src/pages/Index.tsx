import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Brands from "../components/Brands";
import MiddleSection from "../components/SplitScrollSection";
import AboutUs from "../components/AboutUs";
import WorkInProgressPreview from "../components/WorkInProgressPreview";

export default function Index() {
  const isLoggedIn = false;

  return (
    <>
      <Hero />
      <MiddleSection />
      <Shop />
      <AboutUs />
      <WorkInProgressPreview isLoggedIn={isLoggedIn} />
      <Brands speedMs={18000} />
    </>
  );
}