import Hero from "./components/hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Navbar />
      <Hero />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
