"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';


import Container from '@/components/Container';
import LoadingData from '@/components/LoadingData';
import { SimpleCourseCard } from '@/components/CourseCard';
import { getCourses } from '@/states/courses/handleRequests';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface CoursesProps {
    data: {
        title: string;
        description: string;
        href: string;
        viewAllBtn: string;
    };
}

const Courses: React.FC<CoursesProps> = ({ data }) => {

    const { courses, currentPage } = useSelector((state: any) => state.courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])

    return (
        <Container>
            <div id="Courses" className='w-full mt-40'>
                <motion.h2
                    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {data.title}
                </motion.h2>
                <motion.div
                    className="flex items-center justify-between py-7 pb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-lg text-purple-600">{data.description}</p>
                    <Button
                        as={Link}
                        href={data.href}
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transition-colors duration-300 transform hover:scale-105"
                    >
                        {data.viewAllBtn}
                    </Button>
                </motion.div>

                <LoadingData data={courses} emptyMessage="Courses are Empty">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="courses"
                        modules={[Navigation, Pagination, A11y]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            }
                        }}
                    >
                        <AnimatePresence>
                            {courses?.map((course: Course, index: number) => (
                                <SwiperSlide key={course.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.5, delay: 0.1 * index }}
                                    >
                                        <SimpleCourseCard courseData={course} />
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </AnimatePresence>
                    </Swiper>
                </LoadingData>

            </div>
        </Container>
    );
};

export default Courses;