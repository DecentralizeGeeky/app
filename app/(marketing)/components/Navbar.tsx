"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Course data for the dropdown with /coursename links
const courses = {
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

// Dropdown component with navigation links for each course
const CourseDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center">
          Courses <ChevronDownIcon className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[900px] p-4">
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(courses).map(([category, categoryCourses], index) => (
            <div key={category} className={index === 3 ? "col-span-1" : "col-span-1"}>
              <h3 className="text-lg font-semibold text-green-600 mb-2">{category}</h3>
              {categoryCourses.map((course) => (
                <div key={course.title} className="mb-4">
                  <h4 className="font-medium">{course.title}</h4>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <Link href={course.link} className="text-sm text-green-600 hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
              <Link href={`/${category.toLowerCase()}-courses`} className="text-sm text-green-600 hover:underline">
                View all {category.toLowerCase()} courses →
              </Link>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Main Navbar component
export default function  Navbar(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="logo" width={42} height={50} className="w-auto h-auto" />
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden sm:flex space-x-4">
          <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            Learn More
          </Link>
          <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            For Employers
          </Link>
          <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            For Coaches
          </Link>
          <CourseDropdown />
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            Sign up
          </Button>
          <Button className="bg-green-600 text-white hover:bg-green-700">Log in</Button>
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-green-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (only visible when menu is open) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 px-4 pt-2 pb-4">
          <Link href="#" className="text-gray-600 hover:text-green-600">
            Learn More
          </Link>
          <Link href="#" className="text-gray-600 hover:text-green-600">
            For Employers
          </Link>
          <Link href="#" className="text-gray-600 hover:text-green-600">
            For Coaches
          </Link>
          <CourseDropdown />
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            Sign up
          </Button>
          <Button className="bg-green-600 text-white hover:bg-green-700">Log in</Button>
        </div>
      )}
    </header>
  );
};
