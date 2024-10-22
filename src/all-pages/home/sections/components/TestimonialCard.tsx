import React from "react";
import { motion } from 'framer-motion';
import { User } from "@nextui-org/react";
import StarRating from './StarRating';


const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-10 px-6 rounded-lg shadow-lg"
    >
        <StarRating rate={item.rating} />
        <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold max-w-xl text-center mt-5 text-purple-700"
        >
            {item.description}
        </motion.h3>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5"
        >
            <User
                name={`${item.user.firstName} ${item.user.lastName}`}
                avatarProps={{
                    src: `https://i.pravatar.cc/150?u=${item.id}`,
                    className: "w-14 h-14 text-large"
                }}
            />
        </motion.div>
    </motion.div>
);

export default TestimonialCard