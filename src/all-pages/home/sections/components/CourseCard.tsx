import { Card, CardBody, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";
interface CourseCard {
    courseData: Course
    viewCourseBtn: string
}

const CourseCard: React.FC<CourseCard> = ({ courseData, viewCourseBtn }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -1, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
            className="relative"
        >
            <Link href={`courses/${courseData.id}`}>
                <Card shadow="sm" className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden">
                    <CardBody className="overflow-visible p-0 relative h-60 w-full">
                        <Image
                            fill
                            alt={courseData.title}
                            className="w-full"
                            src={courseData.imagePath}
                        />

                    </CardBody>

                    <CardFooter className="flex-col items-start">
                        <div className="flex items-center px-1 justify-between py-3 w-full">
                            <h3 className="font-extrabold text-[15px] lg:text-lg text-purple-700">{courseData.title}</h3>
                            <span className="text-purple-700 font-bold">${courseData.price}</span>
                        </div>
                        <Button
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                        >
                            {viewCourseBtn}
                        </Button>
                    </CardFooter>
                </Card>
            </Link>

        </motion.div>
    );
};

export default CourseCard