"use client"
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react'


// sections
import FreeLessonForm from './components/FreeLessonForm';
import CoursesByAge from './components/CoursesByAge';
import CourseCalendar from './components/CourseCalendar';
import VerifyEmail from './components/VerifyEmail';

import Loading from "@/shared-components/Loading";
import Container from '@/shared-components/Container';

import useCurrentTimezone from '@/hooks/useCurrentTimezone';


const Stepper = dynamic(() => import('./components/Stepper'), {
    ssr: false,
    loading: () => <Loading />,
});

const Step = dynamic(() => import('./components/Stepper').then(mod => mod.Step), {
    ssr: false,
    loading: () => <Loading />,
});



interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

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

