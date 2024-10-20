"use client"

import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { motion } from 'framer-motion';


interface WhatsappContactProps {
    link: string
}

const WhatsappContact: React.FC<WhatsappContactProps> = ({ link }) => {
    return (
        <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            whileHover={{ scale: 0.95 }}
            transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.5 }}
            className=" fixed bottom-4 right-4 z-10 "
        >
            <Link href={link} target="_blanck">
                <FaSquareWhatsapp size={50} className=" rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300" />
            </Link>
        </motion.div>
    );
};

export default WhatsappContact;