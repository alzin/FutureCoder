"use client"

import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';

import TestimonialCard from './components/TestimonialCard';

import LoadingData from '@/shared-components/LoadingData';
import Container from '@/shared-components/Container';

import { getTestimonials } from '@/services/testimonials/handleRequests';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface TestimonialsProps {
    data: {
        title: string,
        testimonials: Testimonial[]
    }
    lang: string
}


const Testimonials: React.FC<TestimonialsProps> = ({ data, lang }) => {

    const dispatch = useDispatch()
    const { testimonials } = useSelector((state: any) => state.testimonials)

    useEffect(() => {
        dispatch(getTestimonials({ lang }))
    }, [dispatch, lang])

    return (
        <Container>
            <div id="Testimonials" className='w-full mt-40'>
                <motion.h1
                    className='mb-10 text-4xl text-purple-700 font-black'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {data.title}
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