"use client"

import Link from 'next/link';
import Container from '@/components/Container';
import LoadingData from '@/components/LoadingData';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { getCourseById } from '@/states/courses/handleRequests';
import { useEffect } from "react"

interface OneCourseProps {
    data: Record<string, any>;
    id: string
}

const OneCourse: React.FC<OneCourseProps> = ({ data, id }) => {

    const dispatch = useDispatch()
    const { findCourse } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourseById({ courseId: id }))
    }, [dispatch, id])


    return (
        <Container>
            <LoadingData data={findCourse} className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                <div id="OneCourse" className='w-full space-y-10'>
                    <h1 className='text-4xl font-black'>{findCourse?.title}</h1>
                    <div className='flex items-start justify-center lg:flex-row flex-col gap-10'>
                        <div className="w-full lg:w-2/3">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    fill
                                    className=' object-cover'
                                    src={findCourse?.imagePath}
                                    alt={findCourse?.title}
                                />
                            </div>
                            <p className='mt-5'>{findCourse?.description}</p>
                        </div>

                        <div className="w-full lg:w-1/3 p-3 bg-gray-200 rounded space-y-5">
                            <h1 className='text-xl font-semibold'>${findCourse?.price}</h1>
                            <div>
                                <b className="inline">Target Age : </b>
                                <p className="text-gray-500 inline">{findCourse?.min_age}-{findCourse?.max_age} years</p>
                            </div>
                            <div>
                                <b className="inline">Duration : </b>
                                <p className="text-gray-500 inline">{findCourse?.duration_in_session} Hours</p>
                            </div>
                            <div>
                                <b className="inline">Teacher : </b>
                                <p className="text-gray-500 inline">{findCourse?.teacher}</p>
                            </div>
                            <div>
                                <b className=" inline">Started Reservation : </b>
                                <p className="text-gray-500 inline">{findCourse?.course_start_date}</p>
                            </div>
                            <Button className='w-full' color='primary'>
                                <Link href={`reservation/${findCourse?.id}`} className='w-full'>
                                    Reserve
                                </Link>
                            </Button>
                        </div>


                    </div>
                    <div>
                        <h1 className='text-2xl font-black'>Course Outline </h1>
                        <p className='text-gray-500'>{findCourse?.course_outline}</p>
                    </div>
                </div>
            </LoadingData>

        </Container>
    );
};

export default OneCourse;