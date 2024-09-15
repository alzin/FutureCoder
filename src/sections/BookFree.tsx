"use client"
import React, { useState } from 'react';
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



interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const { getValueAsStr, getValueAsOpj, setValue, clearAll } = useLocalStorage()
    const [currentStep, setCurrentStep] = useState(Number(getValueAsStr("currentStep")));

    const [bookingData, setBookingData] = useState<BookingFreeCourse>({
        guestUserId: getValueAsStr("userId"),
        CourseId: "",
        SessionTimings: ""
    });


    const [userData, setUserData] = useState<GuestUserData>({
        firstName: getValueAsStr("firstName"),
        lastName: getValueAsStr("lastName"),
        age: getValueAsStr("age"),
        email: getValueAsStr("email"),
        timeZone: getValueAsOpj("timeZone")
    });

    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <Suspense fallback={<Loading />}>
                    <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}>
                        <Step label="Step 1">
                            <FreeLessonForm userData={userData} setUserData={setUserData} setBookingData={setBookingData} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 2">
                            <VerifyEmail userData={userData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 3">
                            <CoursesByAge bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 4">
                            <CourseCalendar timeZone={userData.timeZone?.value || ""} bookingData={bookingData} setBookingData={setBookingData} />
                        </Step>
                    </Stepper>
                </Suspense>
            </div>
        </Container>
    );
};

export default BookFree;

