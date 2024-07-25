import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Resources } from "./components/resources";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-[#F4F4F4] lg:to-white">
      <Header />
      <Hero />
      <Resources />
      <Banner />
      <Footer />
    </main>
  );
}
