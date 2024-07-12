import ShopSection from "./components/ShopSection";
import Navbar from "./components/Navbar";
import CustomSection from "./components/CustomSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ShopSection />
        <CustomSection />
      </div>
      <Footer />
    </main>
  );
}
