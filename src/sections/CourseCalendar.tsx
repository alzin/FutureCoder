import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
// import gregorian_ar from "react-date-object/locales/gregorian_ar"
// import gregorian_en from "react-date-object/locales/gregorian_en"

import { Calendar, DateObject } from 'react-multi-date-picker';
import { Button } from '@nextui-org/react';
import LoadingData from '@/components/LoadingData';
import { getCourseTimesByDate } from '@/states/coursesTimes/handleRequests';
import { addBooking } from '@/states/bookings/handleRequests';
import { useRouter } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
interface CourseCalendar {
    bookingData: BookingFreeCourse;
    setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
    timeZone: string
}

const CourseCalendar: React.FC<CourseCalendar> = ({ bookingData, setBookingData, timeZone }) => {

    const dispatch = useDispatch()
    const { getValueAsOpj, setValue, clearAll } = useLocalStorage()
    const { courseDates, courseTimes, } = useSelector((state: any) => state.coursesTimes)
    const { loading } = useSelector((state: any) => state.bookings)

    const [reservation, setReservation] = useState("")
    const [date, setDate] = useState("")
    const router = useRouter()

    const handelSelectTime = (value: any) => {
        setReservation("Date :" + date.toString() + " Time : " + value.startTime + " - " + value.endTime)
        setBookingData({ ...bookingData, SessionTimings: value.id })
    }

    function createDateObject(dateString: string): DateObject {
        const [year, month, day] = dateString.split("-").map(Number);
        const jsDate = new Date(year, month - 1, day);
        return new DateObject(jsDate);
    }

    const isFull = () => {
        return !!bookingData.guestUserId && !!bookingData.CourseId && bookingData.SessionTimings
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

    const handleGetCourseTimesByDate = (value: any) => {
        setDate(value.toString())

        dispatch(getCourseTimesByDate({ courseId: bookingData.CourseId, date: value.toString(), userId: bookingData.guestUserId })).unwrap().then(
            () => {
                clearAll()
            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );

    }

    const handleBookingCourse = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isFull()) {
            toast.warning("Please Select Time for free session")
            return
        }

        console.log(bookingData)

        dispatch(addBooking({ bookingData })).unwrap().then(
            () => {
                router.push("/")
            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );
    }

    return (
        <div id="Calender" className='mt-[50px] mx-auto'>
            <LoadingData data={courseDates} emptyMessage='Not Found Dates for this Course'>
                <div className='flex items-center sm:items-start justify-center border-2 shadow-lg rounded h-full w-full sm:flex-row flex-col'>
                    <Calendar
                        zIndex={1}
                        // locale={lang === 'ar' ? gregorian_ar : gregorian_en}
                        minDate={new DateObject(new Date())}
                        monthYearSeparator='-'
                        format='YYYY-MM-DD'
                        value={date}
                        onChange={handleGetCourseTimesByDate}
                        mapDays={courseDates && isValidDate}
                    />
                    <div className='h-full w-40 flex flex-col items-center justify-start text-sm pb-2'>
                        <p className='pt-4 pb-3 border-b-2 w-full text-center'>Times {timeZone}</p>
                        <div className='overflow-y-auto overflow-x-hidden gap-2 scroll flex flex-col items-center w-full p-2' style={{ scrollbarWidth: "thin" }}>
                            {date && <LoadingData data={courseTimes} emptyMessage='Not Found Times for this Date'>
                                {courseTimes?.map((item: any, index: number) =>
                                    <Button key={index} color="primary" size="sm" className='m-0 min-h-8 w-full' onClick={() => handelSelectTime(item)}>{item.startTime} - {item.endTime}</Button>
                                )}
                            </LoadingData >}
                        </div>

                    </div>
                </div>
            </LoadingData>


            <span className='my-5 text-center block min-h-10'>{reservation}</span>

            <form className="w-full space-y-5 gap-2 mt-100 max-w-lg" onSubmit={handleBookingCourse}>

                <Button isLoading={loading} type='submit'>Book a free course</Button>
            </form>

        </div>
    )
}

export default CourseCalendar