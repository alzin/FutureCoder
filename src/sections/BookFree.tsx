"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import Stepper from '@/components/Stepper';
// sections
import FreeLessonForm from './FreeLessonForm';
import CoursesByAge from './CoursesByAge';
import CourseCalendar from './CourseCalendar';


interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const [currentStep, setCurrentStep] = useState(0);

    const [bookingData, setBookingData] = useState<BookingFreeCourse>({
        FirstName: "",
        LastName: "",
        Age: "",
        Email: "",
        CourseId: "",
        SessionTimings: ""
    });


    const [userData, setUserData] = useState<GuestUserData>({
        firstName: "",
        lastName: "",
        age: NaN,
        email: "",
        timeZone: ""
    });


    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}>
                    <Stepper.Step label="Step 1" description="">
                        <FreeLessonForm userData={userData} setUserData={setUserData} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                    </Stepper.Step>

                    <Stepper.Step label="Step 2" description="">
                        <CoursesByAge bookingData={bookingData} setBookingData={setBookingData} setCurrentStep={setCurrentStep} />
                    </Stepper.Step>

                    <Stepper.Step label="Step 3" description="">
                        <CourseCalendar bookingData={bookingData} setBookingData={setBookingData} />
                    </Stepper.Step>
                </Stepper>
            </div>
        </Container>
    );
};

export default BookFree;

