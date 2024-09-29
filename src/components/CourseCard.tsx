import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';

interface CourseCard {
    courseData: Course
}

export const SimpleCourseCard: React.FC<CourseCard> = ({ courseData }) => {
    return (

        <Card shadow="none" className='sm:mb-0 mb-7'>
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
            <CardFooter className="text-small flex-col">
                <div className='flex items-center justify-between py-3 w-full'>
                    <p className='text-sm text-center'>{courseData.title}</p>
                    <p className="text-sm text-center">{courseData.price}</p>
                </div>
                <Button className='w-full'>
                    <Link href={`courses/${courseData.id}`} className='w-full'>
                        View Details
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
};


export const CourseDetailsCard: React.FC<CourseCard> = ({ courseData }) => {
    return (
        <Card className='sm:mb-0 mb-7'>
            <CardHeader className="overflow-visible p-0">
                <Image
                    shadow='none'
                    radius="lg"

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
    );
};