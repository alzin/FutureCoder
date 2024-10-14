"use client";

import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { BookOpen, Home, PenTool } from "lucide-react";
import RobotLogo from "./components/RobotLogo"
// import SelectLanguage from "./components/SelectLanguage";


interface HeaderProps {
    data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {

    const navItems = [
        { id: 1, name: data.navItems[0].name, href: data.navItems[0].href, icon: Home },
        { id: 2, name: data.navItems[1].name, href: data.navItems[1].href, icon: BookOpen },
        { id: 3, name: data.navItems[2].name, href: data.navItems[2].href, icon: PenTool },
    ];

    return (
        <Navbar isBordered maxWidth="xl" className="bg-purple-100">

            {/* burger */}
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            {/* mobile menu*/}
            <NavbarMenu className="bg-purple-200 pt-5">
                {navItems.map((item: any) => (
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
                {/* <SelectLanguage lang={data.langList} localeActive={data.lang} /> */}
            </NavbarMenu>

            {/* nav items */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navItems.map((item: any) => (
                    <NavbarItem key={item.id}>
                        <Link
                            color="foreground"
                            href={item.href}
                            className="flex items-center gap-1 text-purple-700 hover:text-purple-900"
                        >
                            <item.icon size={20} />
                            <motion.span
                                key={item.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item.name}
                            </motion.span>

                        </Link>
                    </NavbarItem>
                ))}

                {/* <SelectLanguage lang={data.langList} localeActive={data.lang} /> */}
            </NavbarContent>

            {/* logo */}
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

            {/* login buton */}
            {/* <NavbarContent justify="end">
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
            </NavbarContent> */}

        </Navbar>
    );
}

export default Header;






