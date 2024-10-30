"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="name_sec text-2xl font-bold">
          VIJET
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#skills" className="">
            Skills
          </Link>
          <Link href="#Projects" className="">
            Project
          </Link>
          <Link href="#contact" className="">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="navbutton focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
            <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
            <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-4 text-2xl">
            &times;
          </button>
          <div className="flex flex-col space-y-4">
            <Link
              href="#skills"
              className=""
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              href="#Projects"
              className=""
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link
              href="#contact"
              className=""
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
}
