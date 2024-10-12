"use client"
import { Button } from '@nextui-org/react';
import { ChangeEvent } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import { addBooking } from '@/services/bookings/handleRequests'
import { useDispatch, useSelector } from 'react-redux';


interface FreeLessonFormProps {
  bookingData: BookingFreeCourse;
  setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const FreeLessonForm: React.FC<FreeLessonFormProps> = ({ bookingData, setBookingData, setCurrentStep }) => {

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
    console.log(bookingData)

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
      <input
        type='number'
        placeholder="Enter your Age"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='age'
        required
        value={bookingData.age}
        onChange={handleChange}
      />

      <input
        type='text'
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        placeholder="Enter your First Name"
        name="firstName"
        required
        value={bookingData.firstName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder="Enter your Last Name"
        name="lastName"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        required
        value={bookingData.lastName}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder="Enter your Email"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='email'
        required
        value={bookingData.email}
        onChange={handleChange}
      />

      <Button
        isLoading={loading}
        type='submit'
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        submit
      </Button>

    </form>
  )
}

export default FreeLessonForm