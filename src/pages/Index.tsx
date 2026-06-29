import Hero from "../components/Hero";
import Shop from "../components/Shop";
import Brands from "../components/Brands";
import MiddleSection from "../components/SplitScrollSection";
import AboutUs from "../components/AboutUs";
import WorkInProgressPreview from "../components/WorkInProgressPreview";
import LightingRoomSection from "../components/LightingRoomSection";

export default function Index() {

  return (
    <>
      <Hero />
      <MiddleSection />
      <LightingRoomSection />
      <Shop />
      <AboutUs />
      <WorkInProgressPreview />
      <Brands speedMs={18000} />
    </>
  );
}
