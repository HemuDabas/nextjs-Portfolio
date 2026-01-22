

import Skills from "./components/sub/skills";
import AboutPage from "./about/page";
import Portfolio from "./portfolio/page";
import Hero from "./components/hero";



export default function HomePage() {

  const meteors = Array.from({ length: 10 });
  return (
    <>
      <Hero />
      <AboutPage />
      <Skills />
      <Portfolio />

    </>


  );
}