'use client';
import { CoursesByLevel, CourseLevel } from "@/types"; // Ensure correct path to types
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Ensure this component exists

const courses: CoursesByLevel = {
  Beginner: [
    {
      title: "Intro to Programming",
      description: "Learn fundamental programming concepts using Python, a versatile and beginner-friendly language.",
      link: "/courses/intro-to-programming",
    },
    {
      title: "Frontend Development Basics",
      description: "Learn the basics of HTML, CSS, and JavaScript to build responsive web applications.",
      link: "/courses/frontend-development-basics",
    },
    {
      title: "Backend Development with Node.js",
      description: "Get started with backend development using Node.js and build robust server-side applications.",
      link: "/courses/backend-development-nodejs",
    },
    {
      title: "Blockchain Basics",
      description: "Introductory blockchain developer course. Learn how blockchains and smart contracts work.",
      link: "/courses/blockchain-basics",
    },
    {
      title: "Solidity Smart Contract Development",
      description: "Start here if you're new to writing smart contracts! Learn Solidity programming basics.",
      link: "/courses/solidity-smart-contract-development",
    },
  ],
  Intermediate: [
    {
      title: "Frontend with React",
      description: "Enhance your frontend skills by learning React, the popular JavaScript library for building user interfaces.",
      link: "/courses/frontend-with-react",
    },
    {
      title: "Backend Development with Express",
      description: "Master backend development with Express.js and create scalable server-side applications.",
      link: "/courses/backend-development-express",
    },
    {
      title: "Foundry Fundamentals",
      description: "Learn Foundry for Solidity and level up your Solidity developer skills. Discover advanced smart contract development.",
      link: "/courses/foundry-fundamentals",
    },
    {
      title: "Mobile App Development with React Native",
      description: "Build cross-platform mobile apps using React Native and JavaScript.",
      link: "/courses/mobile-app-development-react-native",
    },
    {
      title: "Bot Development Basics",
      description: "Learn how to create bots using JavaScript to automate tasks and improve workflows.",
      link: "/courses/bot-development-basics",
    },
  ],
  Advanced: [
    {
      title: "Smart Contract DevOps",
      description: "Follow web3 DevOps guidelines and keep an eye on smart contracts after deployment.",
      link: "/courses/smart-contract-devops",
    },
    {
      title: "Fullstack Web Development",
      description: "Master both frontend and backend development to become a full-stack web developer.",
      link: "/courses/fullstack-web-development",
    },
    {
      title: "Advanced Bot Development",
      description: "Develop sophisticated bots using advanced techniques for automation and integration.",
      link: "/courses/advanced-bot-development",
    },
    {
      title: "Advanced Mobile App Development",
      description: "Master advanced mobile app development techniques for iOS and Android using React Native.",
      link: "/courses/advanced-mobile-app-development",
    },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState<CourseLevel>("Beginner");

  const levelNames: CourseLevel[] = ["Beginner", "Intermediate", "Advanced"]; // Explicitly typing the array

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Training The Next Generation of Builders
        </motion.h2>

        {/* Level Tabs */}
        <div className="flex justify-center mb-8">
          {levelNames.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-6 py-3 font-semibold text-lg rounded-lg mx-2 focus:outline-none ${
                activeLevel === level
                  ? "bg-green-600 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          {courses[activeLevel].map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between"
              variants={cardVariants}
            >
              <h4 className="text-xl font-semibold mb-4">{course.title}</h4>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <Link href={course.link}>
                <Button className="text-green-500 hover:text-green-600 font-semibold">
                  Learn More →
                </Button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
