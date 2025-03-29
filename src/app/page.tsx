import Header from "@/app/sections/header";
import Hero from "@/app/sections/hero";
import Images from "@/app/sections/images";
import Footer from "@/app/sections/footer";

export default function Home() {
  return (
    <div className="bg-white">
        <Header />
        <main className="mx-8 my-3">
            <Hero />
            <Images />
        </main>
        <Footer />
    </div>
  );
}
