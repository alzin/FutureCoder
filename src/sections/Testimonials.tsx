"use client"

import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { User } from "@nextui-org/react";
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Testimonial {
    id: string;
    rate: number;
    opinion: string;
    firstName: string;
    lastName: string;
    work: string;
}

interface TestimonialsProps {
    data: {
        testimonials: Testimonial[];
    };
}

const StarRating: React.FC<{ rate: number }> = ({ rate }) => (
    <div className="flex items-center justify-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: star * 0.1 }}
                className={`text-4xl ${star <= rate ? 'text-yellow-400' : 'text-gray-300'}`}
            >
                {star <= rate ? '★' : '☆'}
            </motion.span>
        ))}
    </div>
);

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-10 px-6 bg-purple-100 rounded-lg shadow-lg"
    >
        <StarRating rate={item.rate} />
        <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl font-bold max-w-xl text-center mt-5 text-purple-700"
        >
            {item.opinion}
        </motion.h3>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5"
        >
            <User
                name={`${item.firstName} ${item.lastName}`}
                description={item.work}
                avatarProps={{
                    src: `https://i.pravatar.cc/150?u=${item.id}`,
                    className: "w-14 h-14 text-large"
                }}
            />
        </motion.div>
    </motion.div>
);

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
    return (
        <section id="Testimonials" className="w-full max-w-7xl mx-auto px-4 mt-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center text-purple-800 mb-10"
            >
                What Our Young Coders Say
            </motion.h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Navigation, Pagination, A11y]}
                className="testimonials"
            >
                {data.testimonials.map((item: Testimonial) => (
                    <SwiperSlide key={item.id}>
                        <TestimonialCard item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;