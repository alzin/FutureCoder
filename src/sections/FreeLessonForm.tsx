"use client"
import { Button } from '@nextui-org/react';
import { ChangeEvent, useState } from 'react';
import timezones from 'timezones-list';
import dynamic from 'next/dynamic';
import useLocalStorage from '@/hooks/useLocalStorage';
import { addGuestUser } from '@/states/guestUsers/handleRequests';
import { useDispatch, useSelector } from 'react-redux';
// import useCurrentTimezone from '@/hooks/useCurrentTimezone';

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
  setBookingData: React.Dispatch<React.SetStateAction<BookingFreeCourse>>;
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


const FreeLessonForm: React.FC<FreeLessonFormProps> = ({ userData, setUserData, setBookingData, currentStep, setCurrentStep }) => {

  const { loading } = useSelector((state: any) => state.guestUsers)
  const { setValue } = useLocalStorage()
  const dispatch = useDispatch()

  const [selectedTimezone, setSelectedTimezone] = useState<TimezoneOption | null>(userData.timeZone);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData(prev => ({ ...prev, [name]: value }));
    setValue(name, value)
  }

  const handleChangeTimeZone = (
    option: any | null
  ) => {
    setSelectedTimezone(option);
    setUserData(prev => ({ ...prev, "timeZone": option }));
    setValue("timeZone", option, "opj")
  };

  const handleCreateGuestUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const guestUserData = {
      age: userData.age,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      timeZone: userData.timeZone.value
    }

    dispatch(addGuestUser({ guestUserData })).unwrap().then(
      (payload: any) => {
        setValue("userId", payload.id)
        setBookingData(prev => ({ ...prev, guestUserId: payload.id }))
        setCurrentStep(prev => {
          setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
          return Math.min(4 - 1, prev + 1)
        })
      },
      (error: any) => {
        console.error("Failed :", error);
      }
    );

  }


  return (
    <form className="w-full flex items-center flex-col gap-10 my-5 mb-20 max-w-lg" onSubmit={handleCreateGuestUser}>
      <input
        type='number'
        placeholder="Enter your Age"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='age'
        required
        value={userData.age!}
        onChange={handleChange}
      />

      <input
        type='text'
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        placeholder="Enter your First Name"
        name="firstName"
        required
        value={userData.firstName!}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder="Enter your Last Name"
        name="lastName"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        required
        value={userData.lastName!}
        onChange={handleChange}
      />
      <input
        type='email'
        placeholder="Enter your Email"
        className='p-2 outline-blue-400 w-full bg-gray-100 hover:bg-gray-200 rounded-xl'
        name='email'
        required
        value={userData.email!}
        onChange={handleChange}
      />

      <Select
        options={timezoneOptions}
        onChange={handleChangeTimeZone}
        placeholder="Select Timezone"
        value={selectedTimezone}
        required
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