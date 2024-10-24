"use client"

import { Card, CardBody, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";


interface CourseCard {
    courseData: Course
    lang: string
    data: {
        age: string,
        duration: string,
        outline: string,
        detailsBtn: string,
        years: string,
        hours: string
    }
}

const CourseCard: React.FC<CourseCard> = ({ courseData, lang, data }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative"
        >
            <Card className='sm:mb-0 mb-7 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden'>
                <CardHeader className="overflow-visible p-0 relative w-full h-60">
                    <Image
                        fill
                        alt={courseData?.title}
                        className="w-full object-cover aspect-auto"
                        src={courseData?.imagePath}
                    />
                </CardHeader>

                <CardBody className={`px-7 flex flex-col items-start ${lang === "en" ? "text-left" : "text-right"}`}>
                    <h1 className="text-2xl font-bold text-purple-700">{courseData?.title}</h1>
                    <p className="my-3 px-1 text-gray-500 line-clamp-2">{courseData?.description}</p>

                    <div className='flex items-center justify-between pb-3 w-full'>
                        <p className='text-sm text-center text-gray-500'>${courseData?.price}</p>
                    </div>

                    <div className='flex items-center justify-between pb-3 w-full'>
                        <span>
                            <b className="text-purple-500">{data.duration} : </b>
                            <p className="inline text-gray-500">{courseData?.duration_in_session} {data.hours}</p>
                        </span>
                        <span className="text-sm">
                            <b className="text-purple-500 inline">{data.age}:</b>
                            <p className="inline text-gray-500">{courseData?.min_age}-{courseData.max_age} {data.years}</p>
                        </span>
                    </div>

                    {/* <span>
                        <b className="text-purple-500 inline">{data.outline} : </b>
                        <p className="inline text-gray-500">{courseData?.course_outline}</p>
                    </span> */}
                </CardBody>

                <CardFooter className="text-small flex-col">
                    <Button
                        as={Link}
                        href={`/courses/${courseData.id}`}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                        {data.detailsBtn}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default CourseCard