import React, { useState } from "react";
import { motion } from "framer-motion";
import food from "../food.png"
import car from "../car.png"
import port from "../port.png"
import ecom from "../ecom.png"
import trust from "../trust.png"
import twit from "../twit.png"

const Home = () => {
  const skills = [
    "React.js",
    "JavaScript (ES6+)",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "TailwindCSS",
    "Bootstrap",
    "UI/UX Design",
    "Cloud & DevOps (AWS, Firebase)",
      "Stripe API",
    "Figma & Canva"
  ];

  const projects = [
    {
      title: "Food Order Website",
      description:
        "Full-stack MERN platform with real-time order placement, tracking, admin dashboard, and SMS notifications for instant updates.",
      image: food,
      link: "https://food-order-umber-omega.vercel.app/",
    },
    {
      title: "Twitter Clone",
      description:
        "Social media MERN app with JWT authentication, threaded comments, following system, and automated content moderation.",
      image: twit,
      link: "https://twitter-web-beige.vercel.app/",
    },
    {
      title: "E-commerce Website",
      description:
        "Responsive MERN e-commerce app with cart, admin CRUD panel, Cloudinary image uploads, and React Query state management.",
      image: ecom,
      link: "https://manjusha-fawn.vercel.app/",
    },
    {
      title: "Trust Information Portal",
      description:
        "Secure MERN platform for real-time posts & event announcements, mobile-first UI, content moderation, and Cloudinary media handling.",
      image: trust,
      link: "https://trustweb-saoh.vercel.app/",
    },
    {
      title: "Car Rental Website",
      description:
        "MERN-based car rental app with real-time bookings, Stripe payment integration, role-based access, and responsive UI.",
      image: car,
      link: "https://manikandan0018.github.io/carRental/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Responsive portfolio built with React + Tailwind showcasing skills, projects, and interactive animations.",
      image: ~port,
      link: "https://manikandan0018.github.io/portfolio/",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="bg-gray-100 text-gray-900 font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-gray-900 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-orange-500">Freelancer</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-white">
            <li>
              <a href="#hero" className="hover:text-orange-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-orange-500 transition">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-orange-500 transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-white"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-900 text-white px-6 py-4 space-y-4">
            <a href="#hero" className="block hover:text-orange-500 transition">
              Home
            </a>
            <a
              href="#skills"
              className="block hover:text-orange-500 transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block hover:text-orange-500 transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 to-pink-500 text-white text-center px-6 pt-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Manikandan 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed"
        >
          Professional{" "}
          <span className="font-semibold">Full-Stack Developer</span>
          creating{" "}
          <span className="font-semibold">
            modern, scalable, and user-friendly
          </span>{" "}
          web applications using
          <span className="font-semibold"> MERN stack</span>. I help businesses
          build impactful online solutions.
        </motion.p>
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-white text-orange-500 font-semibold px-6 py-3 rounded shadow-lg hover:bg-gray-100 transition"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded shadow-lg hover:bg-white hover:text-orange-500 transition"
          >
            View Portfolio
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05 }}
                className="bg-orange-100 text-orange-700 px-4 py-3 rounded shadow text-center font-medium text-base transition-all duration-300 hover:bg-orange-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-orange-500 hover:text-pink-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 font-semibold hover:text-orange-500 hover:underline transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-gray-900"
          >
            Contact Me
          </motion.h2>
          <p className="mb-4 text-gray-700 text-lg">
            Email:{" "}
            <a
              href="mailto:Manikandan110305@gmail.com"
              className="text-orange-500 hover:underline font-semibold"
            >
              Manikandan110305@gmail.com
            </a>
          </p>
          <p className="mb-4 text-gray-700 text-lg">
            Phone:{" "}
            <a
              href="tel:+917826920882"
              className="text-orange-500 hover:underline font-semibold"
            >
              +91 78269 20882
            </a>
          </p>
          <p className="mb-6 text-gray-600 text-lg">
            Location: Ariyalur, Tamil Nadu
          </p>
          <div className="flex justify-center gap-6 text-lg">
            <a
              href="https://www.linkedin.com/in/manikandan110305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:text-pink-500 hover:underline transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Manikandan0018"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:text-pink-500 hover:underline transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-300">
        © 2025 Manikandan R. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
