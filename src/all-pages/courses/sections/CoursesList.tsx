"use client"

import { Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { motion } from 'framer-motion';

import Container from "@/shared-components/Container";

import { getCourses } from '@/services/courses/handleRequests';
import LoadingData from '@/shared-components/LoadingData';
import { setCurrentPage } from "@/services/courses/coursesSlice";
import CourseCard from "./components/CourseCard";

const CoursesList: React.FC = () => {

    const dispatch = useDispatch()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <section>
            <Container>
                <LoadingData data={courses} emptyMessage="Courses is Empty" className="min-h-[calc(100vh-200px)] w-full mt-[100px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {courses?.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: .8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                            >
                                <CourseCard key={item.id} courseData={item} />
                            </motion.div>
                        ))}
                    </div>
                    <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />
                </LoadingData>
            </Container>
        </section>
    );
};

export default CoursesList;