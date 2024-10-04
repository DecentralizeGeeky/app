'use client';
import { motion } from "framer-motion";
import Hero from "./components/hero";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Hero />
          </motion.div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
