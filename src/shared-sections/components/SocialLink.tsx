"use client"

import React from "react";
import Link from "next/link";
import { FaSquareWhatsapp, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6";

interface SocialLinkProps {
    link: string,
    name: "whatsapp" | "facebook" | "instagram"
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, name }) => {
    return (
        <Link href={link} target='_blanck' className=" rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300">
            {
                name === "whatsapp" ?
                    <FaSquareWhatsapp size={30} />
                    : name === "facebook" ?
                        <FaSquareFacebook size={30} />
                        : name === "instagram" ?
                            <FaSquareInstagram size={30} />
                            : "not match"
            }
        </Link>
    );
};

export default SocialLink;