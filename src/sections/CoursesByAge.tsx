import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Image, CardFooter } from '@nextui-org/react';


import LoadingData from '@/components/LoadingData';
import { getCourseDatesByCourseId } from '@/states/coursesTimes/handleRequests';


interface CoursesByAgeProps {
    bookingData: BookingFreeCourse;
    setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const CoursesByAge: React.FC<CoursesByAgeProps> = ({ bookingData, setBookingData, setCurrentStep }) => {

    const dispatch = useDispatch()
    const { coursesByAge } = useSelector((state: any) => state.courses)
    const { loading } = useSelector((state: any) => state.coursesTimes)

    const handleGetDatesByCourseId = (courseId: string) => {

        console.log(courseId)
        setBookingData({ ...bookingData, CourseId: courseId })

        dispatch(getCourseDatesByCourseId({ courseId })).unwrap().then(
            () => {
                setCurrentStep(prev => Math.min(3 - 1, prev + 1))
            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );
    }

    return (
        <div id="CoursesByAge" className='w-full'>
            <span className='text-2xl font-bold pb-5 block'>All Courses By Age : </span>
            <LoadingData data={coursesByAge} emptyMessage="Not Found any Course for this age">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 '>
                    {coursesByAge?.map((item: any) =>
                        <Card key={item.id} shadow="sm" className='sm:mb-0 mb-7'>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow='none'
                                    radius="lg"
                                    width="100%"
                                    height={300}
                                    alt={item.title}
                                    className="w-full object-cover aspect-auto"
                                    src={item.imagePath}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex-col">
                                <div className='flex items-center justify-between py-3 w-full'>
                                    <p className='text-sm text-center'>{item.title}</p>
                                    <p className="text-sm text-center">{item.teacher}</p>
                                </div>
                                <Button
                                    className='w-full'
                                    onClick={() => handleGetDatesByCourseId(item.id)}
                                    isLoading={loading && item.id === bookingData.CourseId}
                                >
                                    Show Dates and Times
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </LoadingData>
        </div>

    )
}

export default CoursesByAge