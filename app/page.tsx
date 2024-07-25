import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "../components/Services";
import Works from "@/components/Works";
import Reviews from "../components/Reviews";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <Reviews />
      <Cta />
    </main>
  );
}
