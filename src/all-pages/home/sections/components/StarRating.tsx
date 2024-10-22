import React from 'react';
import { motion } from 'framer-motion';

const StarRating: React.FC<{ rate: number }> = ({ rate }) => (
    <div className="flex items-center justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: star * 0.1 }}
                className={`text-4xl ${star <= rate ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                {star <= rate ? '★' : '☆'}
            </motion.span>
        ))}
    </div>
);

export default StarRating