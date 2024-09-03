"use client"
import { Button } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';

import { getCoursesByAge } from '@/states/courses/handleRequests';

interface FreeLessonFormProps {
  bookingData: BookingFreeCourse;
  setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const FreeLessonForm: React.FC<FreeLessonFormProps> = ({ bookingData, setBookingData, currentStep, setCurrentStep }) => {

  const dispatch = useDispatch()
  const { coursesByAge, loading } = useSelector((state: any) => state.courses)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookingData({ ...bookingData, [name]: value })
  }

  const handleGetCoursesByAge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(bookingData)

    dispatch(getCoursesByAge({ age: bookingData.Age })).unwrap().then(
      () => {
        setCurrentStep(prev => Math.min(3 - 1, prev + 1))
      },
      (error: any) => {
        console.error("Failed :", error);
      }
    );

  }

  return (
    <form className="w-full flex items-center flex-col gap-10 my-5 mb-20 max-w-lg" onSubmit={handleGetCoursesByAge}>
      <input
        type='number'
        placeholder="Enter your Age"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='Age'
        required
        value={bookingData.Age}
        onChange={handleChange}
      />

      <input
        type='text'
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        placeholder="Enter your First Name"
        name="FirstName"
        required
        value={bookingData.FirstName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder="Enter your Last Name"
        name="LastName"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        required
        value={bookingData.LastName}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder="Enter your Email"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='Email'
        required
        value={bookingData.Email}
        onChange={handleChange}
      />

      <Button
        isLoading={loading}
        type='submit'
        disabled={currentStep >= 3 - 1}
        className={`px-4 py-2 bg-blue-500 text-white rounded ${currentStep >= 3 - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
      >
        Next
      </Button>

    </form>
  )
}

export default FreeLessonForm