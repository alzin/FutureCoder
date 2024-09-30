"use client"
import React from 'react';
import Container from '@/components/Container';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { User } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials } from '@/states/testimonials/handleRequests';
import { useEffect } from "react"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoadingData from '@/components/LoadingData';

interface TestimonialsProps {
    data: Record<string, any>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {

    const dispatch = useDispatch()
    const { testimonials } = useSelector((state: any) => state.testimonials)

    useEffect(() => {
        dispatch(getTestimonials())
    }, [dispatch])


    return (
        <Container>
            <div id="Testimonials" className='w-full mt-40'>
                <h1 className='text-5xl font-bold mb-10'>Testimonials</h1>

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
                                <div className='flex items-center justify-start flex-col py-20 '>
                                    <div className='flex items-center justify-center gap-2 pb-5'>
                                        {Array.from({ length: item.rating }).map((_, index) => (
                                            <span key={index} className='text-4xl'>&#9733;</span>
                                        ))}
                                        {Array.from({ length: 5 - item.rating }).map((_, index) => (
                                            <span key={index} className='text-4xl'>&#9734;</span>
                                        ))}
                                    </div>
                                    <h1 className='text-lg font-bold max-w-xl text-center'>{item.description}</h1>
                                    <User
                                        className='mt-5'
                                        name={`${item.user.firstName} ${item.user.lastName}`}
                                    />

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </LoadingData>



            </div>
        </Container>
    );
};

export default Testimonials;