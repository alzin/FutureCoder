import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Image, CardFooter, Pagination } from '@nextui-org/react';
import { motion } from 'framer-motion';


import LoadingData from '@/shared-components/LoadingData';
import { useEffect } from 'react';
import { getAvilableCourses } from '@/services/courses/handleRequests';
import useLocalStorage from '@/hooks/useLocalStorage';
import { setCurrentPage } from '@/services/courses/coursesSlice';
import useCurrentTimezone from '@/hooks/useCurrentTimezone';

interface CoursesListProps {
    // bookingData: BookingFreeCourse;
    setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
    data: any

}

const CoursesList: React.FC<CoursesListProps> = ({ setBookingData, setCurrentStep, data }) => {

    const dispatch = useDispatch()
    const { setValue } = useLocalStorage()
    const { timeZone } = useCurrentTimezone()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)

    useEffect(() => {
        if (timeZone) {
            dispatch(getAvilableCourses({ currentPage, timeZone }))
        }
    }, [dispatch, currentPage, timeZone])

    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleSelectCourse = (courseId: string) => {
        setValue("courseId", courseId)
        setBookingData(prev => ({ ...prev, courseId }))
        setCurrentStep(prev => {
            setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
            return Math.min(4 - 1, prev + 1)
        })
    }

    return (
        <div id="CoursesList" className='w-full'>
            <span className='text-3xl font-bold pb-5 block text-purple-700'>{data.title}  : </span>
            <LoadingData data={courses} emptyMessage="Not Found any Course for this age">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 '>
                    {courses?.map((item: any, index: number) =>
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <Card key={item.id} shadow="sm" className='sm:mb-0 mb-7 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden'>
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
                                    <div className='flex items-start flex-col pb-3 w-full'>
                                        <span className='text-sm text-center'>
                                            <b className='text-purple-500'>{data.coursesList.title} : </b>
                                            <p className='text-gray-500 inline'>{item.title}</p>
                                        </span>
                                        <span className="text-sm text-center">
                                            <b className='text-purple-500'>{data.coursesList.age} :  </b>
                                            <p className='text-gray-500 inline'>{item.min_age} - {item.max_age} {data.coursesList.years}</p>
                                        </span>
                                    </div>
                                    <Button
                                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                                        onClick={() => handleSelectCourse(item.id)}
                                    >
                                        {data.coursesList.showTimesBtn}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>

                    )}
                </div>
                <Pagination color='secondary' className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />
            </LoadingData>
        </div>

    )
}

export default CoursesList