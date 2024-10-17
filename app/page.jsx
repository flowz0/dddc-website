import NavbarComponent from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Hero />
      <Services />
      <About />
    </>
  );
}
