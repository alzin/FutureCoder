"use client"

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Components
import ReservationForm from './components/ReservationForm';
import CoursesList from './components/CoursesList';
import CourseCalendar from './components/CourseCalendar';
import VerifyEmail from './components/VerifyEmail';
import Stepper, { Step } from './components/Stepper';
import Container from '@/shared-components/Container';

// Hooks
import useCurrentTimezone from '@/hooks/useCurrentTimezone';

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
        <section>
            <Container>
                <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                    <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}>
                        <Step label="Step 1">
                            <CoursesList bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 2">
                            <CourseCalendar bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 3">
                            <ReservationForm bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Finished">
                            <VerifyEmail bookingData={bookingData} />
                        </Step>
                    </Stepper>
                </div>
            </Container>
        </section>
    );
};

export default BookFree;

