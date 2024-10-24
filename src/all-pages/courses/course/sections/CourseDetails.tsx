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
    lang: string
}


const CourseDetails: React.FC<CourseDetailsProps> = ({ data, id, lang }) => {

    const dispatch = useDispatch()
    const { findCourse } = useSelector((state: any) => state.courses)


    useEffect(() => {
        dispatch(getCourseById({ courseId: id, lang }))
    }, [dispatch, id, lang])


    return (
        <section>
            <Container>
                <div id="google_translate_element"></div>
                <LoadingData data={findCourse} className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                    <div id="CourseDetails" className='w-full space-y-10'>
                        <h1 className='text-4xl font-black text-purple-700'>{findCourse?.title}</h1>
                        <div className='flex items-start justify-center lg:flex-row flex-col gap-10'>
                            <div className="w-full lg:w-2/3">
                                <div className="relative w-full sm:h-[500px] h-[300px">
                                    <Image
                                        fill
                                        src={findCourse?.imagePath}
                                        alt={findCourse?.title}
                                    />
                                </div>


                                {findCourse?.description.split("\n").map((item: string, index: number) => (
                                    <p className='mt-5 text-gray-500 ' key={index}>
                                        {item}
                                    </p>
                                ))}
                            </div>

                            <div className="w-full lg:w-1/3 p-3 bg-gray-200 rounded space-y-5">
                                <h1 className='text-2xl text-purple-700 font-semibold'>${findCourse?.price}</h1>
                                <div>
                                    <b className="inline text-purple-700">{data.age} : </b>
                                    <p className="text-gray-500 inline">{findCourse?.min_age}-{findCourse?.max_age} {data.years}</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">{data.duration} : </b>
                                    <p className="text-gray-500 inline">{findCourse?.duration_in_session} {data.hours}</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">{data.teacher} : </b>
                                    <p className="text-gray-500 inline">{findCourse?.teacher}</p>
                                </div>
                                <div>
                                    <b className="inline text-purple-700">{data.courseStart} : </b>
                                    <p className="text-gray-500 inline">{findCourse?.course_start_date}</p>
                                </div>
                                <Button as={Link} href={findCourse?.payment_url || "/"} className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'>
                                    {data.buyBtn}
                                </Button>
                            </div>


                        </div>
                        <div>
                            <h1 className='text-2xl font-black text-purple-700'>{data.outline} </h1>
                            {findCourse?.course_outline.split("\n").map((item: string, index: number) => (
                                <p className='text-gray-500 py-1' key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </LoadingData>

            </Container>
        </section>
    );
};

export default CourseDetails;