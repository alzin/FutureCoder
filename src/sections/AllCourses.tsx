"use client"

import React, { useEffect } from "react";
import { Card, CardBody, CardFooter, Image, Button, Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '@/states/courses/handleRequests';
import Link from 'next/link';
import LoadingData from '@/components/LoadingData';
import { setCurrentPage } from "@/states/courses/coursesSlice";
import { motion, AnimatePresence } from 'framer-motion';

interface Course {
    id: string;
    title: string;
    price: string;
    imagePath: string;
}

const CourseCard: React.FC<Course> = ({ id, title, price, imagePath }) => (
    <motion.div
        whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
        whileTap={{ scale: 0.95 }}
    >
        <Card shadow="sm" className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    height={300}
                    alt={title}
                    className="w-full object-cover"
                    src={imagePath}
                />
                <motion.div 
                    className="absolute top-2 right-2 bg-yellow-400 rounded-full p-2 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-white font-bold">{price}</span>
                </motion.div>
            </CardBody>
            <CardFooter className="flex-col items-start">
                <h3 className="font-bold text-lg text-purple-700 mb-2">{title}</h3>
                <Button
                    as={Link}
                    href={`/courses/${id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    </motion.div>
);

const AllCourses: React.FC = () => {
    const dispatch = useDispatch();
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses);

    useEffect(() => {
        dispatch(getCourses({ currentPage }));
    }, [dispatch, currentPage]);

    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 mt-[100px]">
            <motion.h1 
                className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Explore Our Awesome Courses!
            </motion.h1>
            <LoadingData data={courses} emptyMessage="Oops! No courses found. Check back later!" className="min-h-[calc(100vh-400px)] w-full">
                <AnimatePresence>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                    >
                        {courses?.map((course: Course) => (
                            <motion.div
                                key={course.id}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <CourseCard {...course} />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                <motion.div
                    className="flex items-center justify-center mt-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Pagination 
                        total={Math.ceil(totalCount / 5)} 
                        page={currentPage} 
                        onChange={handleChangePage}
                        classNames={{
                            wrapper: "gap-1 overflow-visible h-8 rounded border border-purple-200",
                            item: "w-8 h-8 text-small rounded-none bg-transparent text-purple-600 hover:bg-purple-100",
                            cursor: "bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold",
                        }}
                    />
                </motion.div>
            </LoadingData>
        </section>
    );
};

export default AllCourses;