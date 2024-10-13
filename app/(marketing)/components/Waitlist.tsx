import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Handle the form submission here, for example, send the email to your backend
      console.log("Waitlist email submitted:", email);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Join the Geek Ink LMS Waitlist
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Be the first to access our comprehensive tech education platform designed for
          aspiring technopreneurs. Sign up for early access and receive exclusive updates!
        </motion.p>
        {submitted ? (
          <motion.p
            className="text-green-600 text-xl"
            initial="hidden"
            animate="visible"
            variants={inputVariants}
          >
            Thank you! You’ve been added to the waitlist.
          </motion.p>
        ) : (
          <motion.form
            className="flex flex-col items-center space-y-4"
            onSubmit={handleSubmit}
            initial="hidden"
            animate="visible"
            variants={inputVariants}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <Button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full">
              Join Waitlist
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
