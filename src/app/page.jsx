import Benefit from "@/components/benefit/Benefit";
import Card from "@/components/card/Card";
import Carousel from "@/components/customers/Carousel";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Intro from "@/components/intro/Intro";
import Location from "@/components/location/Location";
import Plan from "@/components/plan/Plan";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <Intro />
      <Card />
      <Benefit />
      <Plan />
      <Location />
      <Carousel />
      <Footer />
    </div>
  );
}
