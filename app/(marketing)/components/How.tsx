import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="space-y-12">
          
          {/* Section 1 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="lg:w-1/2 mb-6 lg:mb-0"
              variants={imageVariants}
            >
              <Image
                src="/Software.svg"
                height={300}
                width={400}
                alt="Introduction Course"
                className="rounded-full shadow-lg" // Updated to rounded-full for 50% border-radius
              />
            </motion.div>
            <motion.div className="lg:w-1/2 lg:pl-12" variants={textVariants}>
              <h3 className="text-xl font-semibold mb-4">Try the Free Course</h3>
              <p className="text-gray-700 mb-4">
                Sign up and start one of our free introduction courses. You’ll learn about
                what the career entails, the current job market, how to break in, and
                whether you would be a good fit.
              </p>
              <Button className="bg-green-500 hover:bg-green-600">Start for Free</Button>
            </motion.div>
          </motion.div>

          {/* Section 2 (S-shape layout) */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center" // Reversed for S-shape
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="lg:w-1/2 mb-6 lg:mb-0"
              variants={imageVariants}
            >
              <Image
                src="/frameworks.svg"
                width={500}
                height={500}
                alt="Learn New Skills"
                className="rounded-full shadow-lg" // Updated to rounded-full for 50% border-radius
              />
            </motion.div>
            <motion.div className="lg:w-1/2 lg:pl-12" variants={textVariants}>
              <h3 className="text-xl font-semibold mb-4">Learn New Skills</h3>
              <p className="text-gray-700 mb-4">
                Once you’ve decided on a career path, it’s time to join our community!
                Enroll in one of our online self-paced courses to begin learning.
              </p>
              <Button className="bg-green-500 hover:bg-green-600">Enroll in Course</Button>
            </motion.div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.div
              className="lg:w-1/2 mb-6 lg:mb-0"
              variants={imageVariants}
            >
              <Image
                src="/Pair-programming.svg"
                height={500}
                width={500}
                alt="Start Your Career"
                className="rounded-full shadow-lg" // Updated to rounded-full for 50% border-radius
              />
            </motion.div>
            <motion.div className="lg:w-1/2 lg:pl-12" variants={textVariants}>
              <h3 className="text-xl font-semibold mb-4">Start Your Career</h3>
              <p className="text-gray-700 mb-4">
                We teach you exactly how to land an entry-level position, give you insider
                knowledge about the job interview process, and much more.
              </p>
              <Button className="bg-green-500 hover:bg-green-600">Interview Scheduled</Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
