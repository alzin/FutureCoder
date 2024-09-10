"use client"
import { Button } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useEffect, useState } from 'react';
import { getCoursesByAge } from '@/states/courses/handleRequests';
import timezones from 'timezones-list';
import dynamic from 'next/dynamic';
import useCurrentTimezone from '@/hooks/useCurrentTimezone';

const Select = dynamic(
  () => import('react-select').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => null,
  },
);


interface FreeLessonFormProps {
  userData: GuestUserData;
  setUserData: React.Dispatch<React.SetStateAction<GuestUserData>>;
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

interface TimezoneOption {
  value: string;
  label: string;
}

const timezoneOptions: TimezoneOption[] = timezones.map(item => {
  return { value: item.tzCode, label: item.label }
})


const FreeLessonForm: React.FC<FreeLessonFormProps> = ({ userData, setUserData, currentStep, setCurrentStep }) => {

  const dispatch = useDispatch()
  const { coursesByAge, loading } = useSelector((state: any) => state.courses)


  const [selectedTimezone, setSelectedTimezone] = useState<TimezoneOption | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData(prev => ({ ...prev, [name]: value }));
  }

  const handleChangeTimeZone = (
    option: any | null
  ) => {
    console.log(option)
    setSelectedTimezone(option);
  };

  const handleGetCoursesByAge = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(userData)

    dispatch(getCoursesByAge({ age: userData.age })).unwrap().then(
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
        value={userData.age || ""}
        onChange={handleChange}
      />

      <input
        type='text'
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        placeholder="Enter your First Name"
        name="FirstName"
        required
        value={userData.firstName}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder="Enter your Last Name"
        name="LastName"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        required
        value={userData.lastName}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder="Enter your Email"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='Email'
        required
        value={userData.email}
        onChange={handleChange}
      />

      <Select
        options={timezoneOptions}
        onChange={handleChangeTimeZone}
        placeholder="Select Timezone"
        value={selectedTimezone}
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
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