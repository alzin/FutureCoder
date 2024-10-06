"use client"
import React, { useEffect, useState } from 'react';
import Container from '@/components/Container';
import dynamic from 'next/dynamic';

const Stepper = dynamic(() => import('@/components/Stepper'), {
    ssr: false,
    loading: () => <Loading />,
});

const Step = dynamic(() => import('@/components/Stepper').then(mod => mod.Step), {
    ssr: false,
    loading: () => <Loading />,
});


// sections
import FreeLessonForm from './FreeLessonForm';
import CoursesByAge from './CoursesByAge';
import CourseCalendar from './CourseCalendar';
import useLocalStorage from '@/hooks/useLocalStorage';
import { Suspense } from 'react'
import Loading from "@/components/Loading";
import VerifyEmail from '@/components/VerifyEmail';
import useCurrentTimezone from '@/hooks/useCurrentTimezone';


interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const { getValue } = useLocalStorage()
    const [currentStep, setCurrentStep] = useState(0);
    const { timeZone } = useCurrentTimezone()

    const [bookingData, setBookingData] = useState<BookingFreeCourse>({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        timeZone: "",
        courseId: "",
        sessionTimings: ""
    });

    useEffect(() => {
        setBookingData(prev => ({ ...prev, timeZone: timeZone }))
    }, [timeZone])

    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <Suspense fallback={<Loading />}>
                    <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}>
                        <Step label="Step 1">
                            <CoursesByAge bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 2">
                            <CourseCalendar bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 3">
                            <FreeLessonForm bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Finished">
                            <VerifyEmail bookingData={bookingData} />
                        </Step>
                    </Stepper>
                </Suspense>
            </div>
        </Container>
    );
};

export default BookFree;

