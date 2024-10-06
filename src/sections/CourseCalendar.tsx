import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import gregorian_ar from "react-date-object/locales/gregorian_ar"
// import gregorian_en from "react-date-object/locales/gregorian_en"

import { Calendar, DateObject } from 'react-multi-date-picker';
import { Button } from '@nextui-org/react';
import LoadingData from '@/components/LoadingData';
import { getCouseseTimeByTimezone } from '@/states/coursesTimes/handleRequests';
import useCurrentTimezone from '@/hooks/useCurrentTimezone';
import useLocalStorage from '@/hooks/useLocalStorage';

interface CourseCalendar {
    bookingData: BookingFreeCourse;
    setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const CourseCalendar: React.FC<CourseCalendar> = ({ bookingData, setBookingData, setCurrentStep }) => {

    const dispatch = useDispatch()
    const { setValue } = useLocalStorage()
    const { timeZone } = useCurrentTimezone()
    const { courseTimes } = useSelector((state: any) => state.coursesTimes)
    const { loading } = useSelector((state: any) => state.bookings)
    const [reservation, setReservation] = useState({
        date: "",
        time: ""
    })

    const handelSelectTime = (value: any) => {
        setReservation(prev => ({ ...prev, time: value.startTime + " - " + value.endTime }))
        setValue("time", value.startTime + " - " + value.endTime)
        setBookingData(prev => ({ ...prev, sessionTimings: value.id }))
        setValue("sessionTimings", value.id)
    }

    const handelSelectDate = (value: any) => {
        setReservation({ time: "", date: value.toString() })
        setValue("time", "")
        setBookingData(prev => ({ ...prev, sessionTimings: "" }))
        setValue("date", value.toString())
    }

    function createDateObject(dateString: any): DateObject {
        const [year, month, day] = dateString.SessionTimings.split("-").map(Number);
        const jsDate = new Date(year, month - 1, day);
        return new DateObject(jsDate);
    }

    const isValidDate = ({ date }: any) => {
        const availableDateObjects: DateObject[] = courseTimes?.map(createDateObject);
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

    const handleSelectTimeAndNext = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!bookingData.sessionTimings) {
            toast.warning("Please Select Time for free session")
            return
        }
        setCurrentStep(prev => {
            setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
            return Math.min(4 - 1, prev + 1)
        })

    }

    useEffect(() => {
        dispatch(getCouseseTimeByTimezone({ course_id: bookingData.courseId, timezone: bookingData.timeZone }))
    }, [dispatch, bookingData.timeZone, bookingData.courseId])

    return (
        <div id="Calender" className='mt-[50px] mx-auto'>
            <LoadingData data={courseTimes} className='w-full' emptyMessage='Not Found Dates for this Course'>
                <div className='flex items-center sm:items-start justify-center border-2 shadow-lg rounded h-full w-full sm:flex-row flex-col max-h-full sm:max-h-[367px]'>
                    <Calendar
                        zIndex={1}
                        // locale={lang === 'ar' ? gregorian_ar : gregorian_en}
                        minDate={new DateObject(new Date())}
                        monthYearSeparator='-'
                        format='YYYY-MM-DD'
                        value={reservation.date}
                        onChange={handelSelectDate}
                        mapDays={courseTimes && isValidDate}
                    />
                    <div className='max-h-full w-40 flex flex-col items-center justify-start text-sm pb-2 '>
                        <p className='pt-4 pb-3 border-b-2 w-full text-center'>Times {timeZone}</p>
                        <div className='max-h-[310px] overflow-y-auto overflow-x-hidden gap-2 scroll flex flex-col items-center w-full p-2' style={{ scrollbarWidth: "thin" }}>
                            {reservation.date && courseTimes?.filter((item: any) => item.SessionTimings === reservation.date).map((item: any, index: number) =>
                                <Button key={index} color="primary" size="sm" className='m-0 min-h-8 w-full' onClick={() => handelSelectTime(item)}>{item.startTime} - {item.endTime}</Button>
                            )}
                        </div>

                    </div>
                </div>

                <div className='my-10 text-center block'>
                    <p className='text-left'> Date : {reservation.date}</p>
                    <p className='text-left'>Time : {reservation.time}</p>
                </div>

                <form className="w-full block space-y-5 gap-2 mt-100 max-w-lg" onSubmit={handleSelectTimeAndNext}>
                    <Button isLoading={loading} type='submit'>Next</Button>
                </form>

            </LoadingData>




        </div>
    )
}

export default CourseCalendar