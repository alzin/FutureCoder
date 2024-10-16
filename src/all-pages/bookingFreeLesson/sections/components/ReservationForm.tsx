"use client"

import { Button } from '@nextui-org/react';
import { ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import useLocalStorage from '@/hooks/useLocalStorage';
import { addBooking } from '@/services/bookings/handleRequests'

interface ReservationFormProps {
  bookingData: BookingFreeCourse;
  setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const ReservationForm: React.FC<ReservationFormProps> = ({ bookingData, setBookingData, setCurrentStep }) => {

  const { loading } = useSelector((state: any) => state.bookings)
  const { setValue, clearAll } = useLocalStorage()
  const dispatch = useDispatch()


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }));
    setValue(name, value)
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log(bookingData)

    dispatch(addBooking({ bookingData })).unwrap().then(
      () => {
        setCurrentStep(prev => {
          setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
          return Math.min(4 - 1, prev + 1)
        })

        clearAll()
      },
      (error: any) => {
        console.error("Failed :", error);
      }
    );

  }


  return (
    <form className="w-full flex items-center flex-col gap-10 my-5 mb-20 max-w-lg" onSubmit={handleSubmit}>
      <motion.input
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        type='number'
        placeholder="Enter your Age"
        className='p-2 outline-purple-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='age'
        required
        value={bookingData.age}
        onChange={handleChange}
      />

      <motion.input
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        type='text'
        className='p-2 outline-purple-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        placeholder="Enter your First Name"
        name="firstName"
        required
        value={bookingData.firstName}
        onChange={handleChange}
      />
      <motion.input
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        type='text'
        placeholder="Enter your Last Name"
        name="lastName"
        className='p-2 outline-purple-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        required
        value={bookingData.lastName}
        onChange={handleChange}
      />
      <motion.input
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        type='email'
        placeholder="Enter your Email"
        className='p-2 outline-purple-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='email'
        required
        value={bookingData.email}
        onChange={handleChange}
      />


      <div className="w-full mt-24 flex items-center justify-between">
        <Button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          className='bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300'
        >
          Previous
        </Button>

        <Button
          isLoading={loading}
          type='submit'
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
        >
          Next
        </Button>
      </div>

    </form>
  )
}

export default ReservationForm