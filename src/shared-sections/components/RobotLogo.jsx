import React from "react";
import { motion } from "framer-motion";

const RobotLogo = () => {
    return (
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
    )
};

export default RobotLogo;
