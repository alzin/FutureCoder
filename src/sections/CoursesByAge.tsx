import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, Image, CardFooter, Pagination } from '@nextui-org/react';


import LoadingData from '@/components/LoadingData';
import { getCouseseTimeByTimezone } from '@/states/coursesTimes/handleRequests';
import { useEffect } from 'react';
import { getCourses } from '@/states/courses/handleRequests';
import useLocalStorage from '@/hooks/useLocalStorage';
import { setCurrentPage } from '@/states/courses/coursesSlice';
import Link from 'next/link';


interface CoursesByAgeProps {
    courseData: CourseData;
    setCourseData: React.Dispatch<React.SetStateAction<CourseData>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const CoursesByAge: React.FC<CoursesByAgeProps> = ({ courseData, setCourseData, setCurrentStep }) => {

    const dispatch = useDispatch()
    const { setValue } = useLocalStorage()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)
    const { loading } = useSelector((state: any) => state.coursesTimes)

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


    const handleSelectCourse = (courseId: string) => {
        setValue("course_id", courseId)
        setCourseData(prev => ({ ...prev, course_id: courseId }))

        setCurrentStep(prev => {
            setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
            return Math.min(4 - 1, prev + 1)
        })
    }


    return (
        <div id="CoursesByAge" className='w-full'>
            <span className='text-2xl font-bold pb-5 block'>All Courses  : </span>
            <LoadingData data={courses} emptyMessage="Not Found any Course for this age">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 '>
                    {courses?.map((item: any) =>
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
                                <div className='flex items-start flex-col pb-3 w-full'>
                                    <p className='text-sm text-center'>Course Title : {item.title}</p>
                                    <p className="text-sm text-center">Course Age : {item.min_age} - {item.max_age} year</p>
                                </div>
                                <Button
                                    className='w-full'
                                    onClick={() => handleSelectCourse(item.id)}
                                    isLoading={loading && item.id === courseData.course_id}
                                >
                                    Show Dates and Times
                                </Button>

                                <Link className='w-full mt-2' href={`/courses/${item.id}`}>
                                    <Button className='w-full'>
                                        Show Couses Details
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )}
                </div>
                <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />

            </LoadingData>
        </div>

    )
}

export default CoursesByAge