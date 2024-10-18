"use client"

import Image from "next/image";
import Link from 'next/link';
import { useEffect } from "react"
import { Button } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';

import { getCourseById } from '@/services/courses/handleRequests';

import Container from '@/shared-components/Container';
import LoadingData from '@/shared-components/LoadingData';


interface CourseDetailsProps {
    data: Record<string, any>;
    id: string
}


const CourseDetails: React.FC<CourseDetailsProps> = ({ data, id }) => {

    const dispatch = useDispatch()
    const { findCourse } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourseById({ courseId: id }))
    }, [dispatch, id])


    return (
        <section>
            <Container>
                <LoadingData data={findCourse} className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                    <div id="CourseDetails" className='w-full space-y-10'>
                        <h1 className='text-4xl font-black text-purple-700'>{findCourse?.title}</h1>
                        <div className='flex items-start justify-center lg:flex-row flex-col gap-10'>
                            <div className="w-full lg:w-2/3">
                                <div className="relative w-full sm:h-[500px] h-[300px]">
                                    <Image
                                        fill
                                        className='object-contain'
                                        src={findCourse?.imagePath}
                                        alt={findCourse?.title}
                                    />
                                </div>
                                <p className='mt-5 text-gray-500 '>{findCourse?.description}</p>
                            </div>

                            <div className="w-full lg:w-1/3 p-3 bg-gray-200 rounded space-y-5">
                                <h1 className='text-2xl text-purple-700 font-semibold'>${findCourse?.price}</h1>
                                <div>
                                    <b className="inline text-purple-700">Target Age : </b>
                                    <p className="text-gray-500 inline">{findCourse?.min_age}-{findCourse?.max_age} years</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">Duration : </b>
                                    <p className="text-gray-500 inline">{findCourse?.duration_in_session} Hours</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">Teacher : </b>
                                    <p className="text-gray-500 inline">{findCourse?.teacher}</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">Course Start : </b>
                                    <p className="text-gray-500 inline">{findCourse?.course_start_date}</p>
                                </div>
                                <Button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'>
                                    <Link href={`reservation/${findCourse?.id}`} className='w-full'>
                                        Reserve
                                    </Link>
                                </Button>
                            </div>


                        </div>
                        <div>
                            <h1 className='text-2xl font-black text-purple-700'>Course Outline </h1>
                            <p className='text-gray-500 py-1'>{findCourse?.course_outline}</p>
                        </div>
                    </div>
                </LoadingData>

            </Container>
        </section>
    );
};

export default CourseDetails;