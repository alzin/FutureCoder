"use client"

import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CourseCard {
    courseData: Course
}

const CourseCard: React.FC<CourseCard> = ({ courseData }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            className="relative"
        >
            <Card className='sm:mb-0 mb-7 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden'>
                <CardHeader className="overflow-visible p-0">
                    <Image
                        shadow='none'
                        radius="lg"
                        alt={courseData?.title}
                        className="w-full object-cover aspect-auto"
                        src={courseData?.imagePath}
                    />
                </CardHeader>

                <CardBody className="px-7">
                    <h1 className="text-2xl font-bold text-purple-700">{courseData?.title}</h1>
                    <p className="my-3 text-gray-500 line-clamp-2">{courseData?.description}</p>

                    <div className='flex items-center justify-between pb-3 w-full'>
                        <p className='text-sm text-center text-gray-500'>${courseData?.price}</p>
                        <span className="text-sm text-center">
                            <b className="text-purple-500 inline">Age:</b>
                            <p className="inline text-gray-500">{courseData?.min_age}-{courseData.max_age} years</p>
                        </span>
                    </div>

                    <span>
                        <b className="text-purple-500 inline">Duration : </b>
                        <p className="inline text-gray-500">{courseData?.duration_in_session} Hours</p>
                    </span>
                    <span>
                        <b className="text-purple-500 inline">Course Outline : </b>
                        <p className="inline text-gray-500">{courseData?.course_outline}</p>
                    </span>
                </CardBody>

                <CardFooter className="text-small flex-col">
                    <Button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'>
                        <Link href={`courses/${courseData?.id}`} className='w-full'>
                            View Details
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default CourseCard