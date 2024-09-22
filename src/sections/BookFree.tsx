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

    const { getValueAsStr } = useLocalStorage()
    const [currentStep, setCurrentStep] = useState(Number(getValueAsStr("currentStep")));
    const { timeZone } = useCurrentTimezone()

    const [bookingData, setBookingData] = useState<BookingFreeCourse>({
        guestUserId: getValueAsStr("userId"),
        CourseId: "",
        SessionTimings: ""
    });


    const [userData, setUserData] = useState<GuestUserData>({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        timeZone: ""
    });

    const [courseData, setCourseData] = useState<CourseData>({
        course_id: getValueAsStr("course_id"),
        // timezone: getValueAsStr("timezone") ||"Asia/Tokyo"
        timezone: getValueAsStr("timezone") || timeZone

    });


    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <Suspense fallback={<Loading />}>
                    <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}>
                        <Step label="Step 1">
                            <CoursesByAge courseData={courseData} setCourseData={setCourseData} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 2">
                            <CourseCalendar courseData={courseData} bookingData={bookingData} setBookingData={setBookingData} />
                        </Step>

                        <Step label="Step 3">
                            <FreeLessonForm userData={userData} setUserData={setUserData} setBookingData={setBookingData} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                        </Step>

                        <Step label="Step 3">
                            <VerifyEmail userData={userData} />
                        </Step>
                    </Stepper>
                </Suspense>
            </div>
        </Container>
    );
};

export default BookFree;

