import Carousel from "./Carousel";
import Cars from "./Cars";
import Location from "./Location";
import OurAchievement from "./OurAchievement";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <Location />
      <Cars/>
      <WhyChooseUs/>
      <Testimonial/>
      <OurAchievement />
    </>
  );
}
