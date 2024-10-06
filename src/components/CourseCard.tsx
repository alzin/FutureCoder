import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CourseCard {
    courseData: Course
}

export const SimpleCourseCard: React.FC<CourseCard> = ({ courseData }) => {
    return (
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
                        alt={courseData.title}
                        className="w-full object-cover"
                        src={courseData.imagePath}
                    />

                </CardBody>

                <CardFooter className="flex-col items-start">
                    <div className="flex items-center justify-between py-3 w-full">
                        <h3 className="font-bold text-lg text-purple-700 mb-2">{courseData.title}</h3>
                        <span className="text-purple-700 font-bold">{courseData.price}</span>
                    </div>
                    <Button
                        as={Link}
                        href={`courses/${courseData.id}`}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
};


export const CourseDetailsCard: React.FC<CourseCard> = ({ courseData }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            className="relative"
        >
            <Card className='sm:mb-0 mb-7'>
                <CardHeader className="overflow-visible p-0">
                    <Image
                        shadow='none'
                        radius="lg"
                        width="100%"
                        height={300}
                        alt={courseData.title}
                        className="w-full object-cover aspect-auto"
                        src={courseData.imagePath}
                    />
                </CardHeader>

                <CardBody className="px-7">
                    <h1 className="text-xl font-bold">{courseData.title}</h1>
                    <p className="my-3 text-gray-500 line-clamp-2">{courseData.description}</p>

                    <div className='flex items-center justify-between pb-3 w-full'>
                        <p className='text-sm text-center'>${courseData.price}</p>
                        <p className="text-sm text-center text-gray-500">Age: {courseData.min_age}-{courseData.max_age} years </p>
                    </div>

                    <span>
                        <b className="text-gray-500 inline">Duration : </b>
                        <p className="inline">{courseData.duration_in_session} Hours</p>
                    </span>
                    <span>
                        <b className="text-gray-500 inline">Course Outline : </b>
                        <p className="inline">{courseData.course_outline}</p>
                    </span>
                </CardBody>

                <CardFooter className="text-small flex-col">
                    <Button className='w-full'>
                        <Link href={`courses/${courseData.id}`} className='w-full'>
                            View Details
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};