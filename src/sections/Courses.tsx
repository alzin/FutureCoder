"use client"

import React, { useEffect } from 'react';
import Link from 'next/link';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

import LoadingData from '@/components/LoadingData';
import { getCourses } from '@/states/courses/handleRequests';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Course {
    id: string;
    title: string;
    price: string;
    imagePath: string;
}

interface CoursesProps {
    data: {
        title: string;
        description: string;
        href: string;
        viewAllBtn: string;
    };
}

const CourseCard: React.FC<{ course: Course; viewAllBtn: string; href: string }> = ({ course, viewAllBtn, href }) => (
    <motion.div 
        whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }} 
        whileTap={{ scale: 0.95 }}
        className="relative"
    >
        <Card shadow="sm" className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height={200}
                    alt={course.title}
                    className="w-full object-cover"
                    src={course.imagePath}
                />
                <motion.div 
                    className="absolute top-2 right-2 bg-yellow-400 rounded-full p-2 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-white font-bold">{course.price}</span>
                </motion.div>
            </CardBody>
            <CardFooter className="flex-col items-start">
                <h3 className="font-bold text-lg text-purple-700 mb-2">{course.title}</h3>
                <Button
                    as={Link}
                    href={href}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                >
                    {viewAllBtn}
                </Button>
            </CardFooter>
        </Card>
    </motion.div>
);

const Courses: React.FC<CoursesProps> = ({ data }) => {
    const { courses, currentPage } = useSelector((state: any) => state.courses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])

    return (
        <section id="Courses" className="w-full max-w-7xl mx-auto px-4 mt-20">
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
                                    <CourseCard course={course} viewAllBtn={data.viewAllBtn} href={data.href} />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </AnimatePresence>
                </Swiper>
            </LoadingData>
        </section>
    );
};

export default Courses;