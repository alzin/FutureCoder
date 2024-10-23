import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';

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
                        <span className="text-purple-700 font-bold">${courseData.price}</span>
                    </div>
                    <Button
                        as={Link}
                        href={`courses/${courseData.id}`}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                        {viewCourseBtn}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default CourseCard