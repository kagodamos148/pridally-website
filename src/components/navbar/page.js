"use client";
import { assets } from "../../../assets/assets.js";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../../../lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  return (
    <div className="w-full flex flex-col justify-center w-full overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar/>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status when component mounts
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 dark:bg-gray-900/80", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: PRIDaLLY brand name */}
          <div className="flex-shrink-0 text-xl font-bold">
            <Link href="/" className="relative group">
              <div className="relative h-16 w-48 transition-transform duration-200 group-hover:scale-105">
                <Image 
                  src={assets.logo} 
                  alt="PRIDaLLY Logo" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center: Menu Items */}
          <div className="hidden md:flex space-x-6 justify-center font-medium">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="text-sm grid grid-cols-3 gap-10 p-4">
                  <ProductItem
                    title="Physical Health"
                    href="/physicalH"
                    src="/ph.png"
                    description="Track, improve, and stay in tune with your body's needs."
                  />
                  <ProductItem
                    title="Mental Health"
                    href="/mentalH"
                    src="/mh.png"
                    description="Support your emotional well-being with tools that care."
                  />
                  <ProductItem
                    title="Social Health"
                    href="/socialH"
                    src="/sh.png"
                    description="Build connections, foster belonging, and grow together."
                  />
                  <ProductItem
                    title="Sexual Health"
                    href="/sexualH"
                    src="/sxh.png"
                    description="Explore, protect, and understand your sexual wellness."
                  />
                  <ProductItem
                    title="Reproductive Health"
                    href="/reproductiveH"
                    src="/rh.png"
                    description="Explore, protect, and understand your reproductive wellness."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Info">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/aboutcompany">About Company</HoveredLink>
                  <HoveredLink href="/aboutlgbtq">About LGBTQAI+</HoveredLink>
                  <HoveredLink href="/founders">Founders</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>

          {/* Right: Authentication Buttons */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <button>
                  <Link 
                    href="/signin" 
                    className="flex items-center gap-2 font-medium button_top py-1 px-3 sm:py-3 sm:px-6 text-sm border border-solid border-black shadow-[-7px_7px_0px_#000000] text-gray-700 active:shadow-[0px] hover:font-bold dark:border-white dark:text-white dark:shadow-[-7px_7px_0px_#ffffff] transition-all duration-200"
                  >
                    Sign In
                  </Link>
                </button>
                <button>
                  <Link 
                    href="/signup" 
                    className="bg-black flex items-center gap-2 font-medium button_top py-1 px-3 sm:py-3 sm:px-6 text-sm border border-solid border-black shadow-[-7px_7px_0px_#999999] text-white active:shadow-[0px] hover:font-bold dark:bg-white dark:text-black transition-all duration-200"
                  >
                    Sign Up
                  </Link>
                </button>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                {/* User Profile Link - Shows when logged in */}
                <Link
                  href="/profile"
                  className="flex items-center gap-2 font-medium py-1 px-3 text-sm text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white">
                    {/* You can replace this with user's initial or profile picture */}
                    <span>U</span>
                  </div>
                </Link>
                
                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 font-medium button_top py-1 px-3 sm:py-3 sm:px-6 text-sm border border-solid border-black shadow-[-7px_7px_0px_#000000] text-gray-700 active:shadow-[0px] hover:font-bold dark:border-white dark:text-white dark:shadow-[-7px_7px_0px_#ffffff] transition-all duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;