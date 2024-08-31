"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import { DateObject } from 'react-multi-date-picker';
import { Calendar } from 'react-multi-date-picker';
// import gregorian_ar from "react-date-object/locales/gregorian_ar"
// import gregorian_en from "react-date-object/locales/gregorian_en"
import { Button, Input, Card, CardBody, Image, CardFooter } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingData from '@/components/LoadingData';
import { getCoursesByAge } from '@/states/courses/handleRequests';
import { getCourseDatesByCourseId, getCourseTimesByDate } from '@/states/coursesTimes/handleRequests';
import { addBooking } from '@/states/bookings/handleRequests';

interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const [date, setDate] = useState("")
    const [courseId, setCourseId] = useState("")
    const [times, setTimes] = useState<string[]>([])
    const [reservation, setReservation] = useState("")
    const [age, setAge] = useState("");
    const [bookingData, setBookingData] = useState({});

    const dispatch = useDispatch()
    const { coursesByAge } = useSelector((state: any) => state.courses)
    const { courseDates, courseTimes } = useSelector((state: any) => state.coursesTimes)


    const handelSelectTime = (value: any) => {
        setReservation(date.toString() + " --/-- " + value.start_time + value.end_time)
    }

    function createDateObject(dateString: string): DateObject {
        const [year, month, day] = dateString.split("-").map(Number);
        const jsDate = new Date(year, month - 1, day);
        return new DateObject(jsDate);
    }

    const isValidDate = ({ date }: any) => {
        const availableDateObjects: DateObject[] = courseDates?.map(createDateObject);
        const isAvailable = availableDateObjects.some(availableDate =>
            availableDate.year.toString() === date.year.toString() &&
            availableDate.month.toString() === date.month.toString() &&
            availableDate.day.toString() === date.day.toString()
        );

        return {
            disabled: !isAvailable,
            style: {
                textDecoration: !isAvailable ? 'line-through' : 'none',
                color: !isAvailable ? '#ccc' : '',
            },
        };
    }

    const handleGetCoursesByAge = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(age)

        dispatch(getCoursesByAge({ age })).unwrap().then(
            () => {
                setAge("")
            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );

    }

    const handleGetDatesByCourseId = (courseId: string) => {
        console.log(courseId)
        setCourseId(courseId)

        dispatch(getCourseDatesByCourseId({ courseId })).unwrap().then(
            () => {

            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );
    }

    const handleGetCourseTimesByDate = (value: any) => {
        setDate(value.toString())
        setReservation("")

        console.log("courseId", courseId)
        console.log("parsedDate", value.toString())

        dispatch(getCourseTimesByDate({ courseId, date: value.toString() })).unwrap().then(
            () => {
                // setTimes(allTimes[parsedDate])
            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );

    }

    const handleBookingCourse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(bookingData)

        // dispatch(addBooking({ bookingData })).unwrap().then(
        //     () => {
        //         setBookingData({})
        //     },
        //     (error: any) => {
        //         console.error("Failed :", error);
        //     }
        // );
    }

    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>

                <form className="w-full flex items-center gap-2 my-5 mb-20 max-w-lg" onSubmit={handleGetCoursesByAge}>
                    <input
                        type='number'
                        className=' outline-blue-500 p-2 bg-gray-100 hover:bg-gray-200 flex-1 rounded-xl'
                        placeholder="Enter your Age"
                        value={age}
                        required
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <Button type='submit'>Submit</Button>
                </form>

                <div className='flex items-start justify-between w-full gap-10 flex-col md:flex-row'>
                    <div id="CoursesByAge" className='w-full'>
                        <span className='text-2xl font-bold pb-5 block'>All Courses By Age : </span>
                        <LoadingData data={coursesByAge} emptyMessage="Not Found any Course for this age">
                            <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5 '>
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
                                            <Button className='w-full' onClick={() => handleGetDatesByCourseId(item.id)}>
                                                Show Dates and Times
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                )}
                            </div>
                        </LoadingData>
                    </div>

                    <div id="Calender" className='mt-[50px] mx-auto'>

                        <LoadingData data={courseDates} emptyMessage='aaaa'>
                            <div className='flex items-center justify-center border-2 shadow-lg rounded h-72'>
                                <Calendar
                                    zIndex={1}
                                    // locale={lang === 'ar' ? gregorian_ar : gregorian_en}
                                    monthYearSeparator='-'
                                    format='YYYY-MM-DD'
                                    className='h-full'
                                    value={date}
                                    onChange={handleGetCourseTimesByDate}
                                    mapDays={courseDates && isValidDate}
                                />
                                <div className='h-full w-40 flex flex-col items-center text-sm'>
                                    <p className='pt-4 pb-3 border-b-2 w-full text-center'>Times</p>
                                    <div className='overflow-y-auto overflow-x-hidden gap-2 scroll flex flex-col items-center w-full p-2' style={{ scrollbarWidth: "thin" }}>
                                        <LoadingData data={courseTimes} emptyMessage='aaaa'>
                                            {courseTimes?.map((item: any, index: number) =>
                                                <Button key={index} color="primary" size="sm" className='m-0 min-h-8 w-full' onClick={() => handelSelectTime(item)}>{item.start_time} - {item.end_time}</Button>
                                            )}
                                        </LoadingData >
                                    </div>

                                </div>
                            </div>
                        </LoadingData>


                        <span className='my-5 text-center block min-h-10'>{reservation}</span>

                        <form className="w-full space-y-5 gap-2 mt-100 max-w-lg" onSubmit={handleBookingCourse}>
                            <input
                                type='text'
                                className=' outline-blue-400 p-2'
                                placeholder="Enter your First Name"
                                required
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <input
                                type='text'
                                className=' outline-blue-400 p-2'
                                placeholder="Enter your Last Name"
                                required
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <input
                                type='email'
                                className=' outline-blue-400 p-2'
                                placeholder="Enter your Email"
                                required
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <input
                                type='text'
                                className=' outline-blue-400 p-2'
                                required
                                value={reservation}
                                disabled
                            />
                            <Button type='submit'>Book a free course</Button>
                        </form>

                    </div>
                </div>

            </div>
        </Container>
    );
};

export default BookFree;

