import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturedProperties from "../components/FeaturedProperties";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Testimonials from "../components/ui/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
