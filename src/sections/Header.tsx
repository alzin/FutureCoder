"use client";

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BookOpen, Home, PenTool, User } from "lucide-react";

interface HeaderProps {
  data: {
    logIn: string;
    // Add any other properties that might be in the data object
  };
}

const RobotLogo = () => (
  <svg viewBox="0 0 100 100" width="40" height="40">
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      fill="#4CAF50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <motion.rect
      x="30"
      y="30"
      width="40"
      height="30"
      rx="5"
      fill="#FFFFFF"
      initial={{ y: -50 }}
      animate={{ y: 30 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    />
    <motion.circle
      cx="40"
      cy="45"
      r="5"
      fill="#2196F3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
    />
    <motion.circle
      cx="60"
      cy="45"
      r="5"
      fill="#2196F3"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, duration: 0.3 }}
    />
    <motion.path
      d="M 40 65 Q 50 75 60 65"
      stroke="#FF5722"
      strokeWidth="3"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 1, name: "Home", href: "/", icon: Home },
    { id: 2, name: "Courses", href: "/courses", icon: BookOpen },
    { id: 3, name: "Blogs", href: "/blogs", icon: PenTool },
  ];

  return (
    <Navbar isBordered maxWidth="xl" className="bg-purple-100">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </NavbarContent>

      <NavbarMenu className="bg-purple-200 pt-5">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full flex items-center gap-2 text-lg font-semibold text-purple-700 hover:text-purple-900"
              href={item.href}
            >
              <item.icon size={24} />
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              color="foreground"
              href={item.href}
              className="flex items-center gap-1 text-purple-700 hover:text-purple-900"
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarBrand className="flex items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <RobotLogo />
            </motion.div>
            <p className="font-bold text-2xl text-purple-700">Future Coder</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="/login"
            variant="flat"
            className="bg-purple-500 text-white hover:bg-purple-600"
          >
            {data.logIn}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;