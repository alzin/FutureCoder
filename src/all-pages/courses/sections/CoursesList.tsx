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

interface CoursesListProps {
    lang: string,
    data: {
        age: string,
        duration: string,
        outline: string,
        detailsBtn: string,
        years: string,
        hours: string
    }
}

const CoursesList: React.FC<CoursesListProps> = ({ data, lang }) => {

    const dispatch = useDispatch()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourses({ currentPage, lang }))
    }, [dispatch, currentPage, lang])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <section className="overflow-x-hidden">
            <Container>
                <LoadingData data={courses} emptyMessage="Courses is Empty" className="min-h-[calc(100vh-200px)] w-full mt-[100px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {courses?.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <CourseCard key={item.id} courseData={item} lang={lang} data={data} />
                            </motion.div>
                        ))}
                    </div>
                    <Pagination color='secondary' className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />
                </LoadingData>
            </Container>
        </section>
    );
};

export default CoursesList;