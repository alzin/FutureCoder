"use client"

import Container from "@/shared-components/Container";
import { Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '@/services/courses/handleRequests';
import { useEffect } from "react";
import LoadingData from '@/shared-components/LoadingData';
import { setCurrentPage } from "@/services/courses/coursesSlice";
import CourseCard from "./components/CourseCard";

const AllCourses: React.FC = () => {

    const dispatch = useDispatch()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <Container>
            <LoadingData data={courses} emptyMessage="Courses is Empty" className="min-h-[calc(100vh-200px)] w-full mt-[100px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {courses?.map((item: any) => (
                        <CourseCard key={item.id} courseData={item} />
                    ))}
                </div>

                <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />

            </LoadingData>
        </Container>
    );
};

export default AllCourses;