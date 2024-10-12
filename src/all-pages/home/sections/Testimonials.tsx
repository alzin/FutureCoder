"use client"
import React from 'react';
import Container from '@/shared-components/Container';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { User } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '@/services/testimonials/handleRequests';
import { useEffect } from "react"
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoadingData from '@/shared-components/LoadingData';

interface TestimonialsProps {
    data: Record<string, any>;
}
interface Testimonial {
    id: string;
    rating: number;
    description: string;
    user: {
        firstName: string;
        lastName: string;
    }
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {

    const dispatch = useDispatch()
    const { testimonials } = useSelector((state: any) => state.testimonials)

    useEffect(() => {
        dispatch(getTestimonials())
    }, [dispatch])


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
    return (
        <Container>
            <div id="Testimonials" className='w-full mt-40'>
                <motion.h1
                    className='mb-10 text-4xl text-purple-700 font-black'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Testimonials
                </motion.h1>
                <LoadingData data={testimonials} emptyMessage="Testimonials is Empty">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10} // Space between slides
                        pagination={{ clickable: true }} // Enable pagination
                        navigation={true}
                        modules={[Navigation, Pagination, A11y]}
                        className='testimonials'
                    >
                        {testimonials?.map((item: any) => (
                            <SwiperSlide key={item.id}>
                                <TestimonialCard item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </LoadingData>



            </div>
        </Container>
    );
};

export default Testimonials;