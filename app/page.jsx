import NavbarComponent from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import About from "./_components/About";

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
