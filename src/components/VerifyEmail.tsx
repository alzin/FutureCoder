import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import useLocalStorage from '@/hooks/useLocalStorage'
import { checkVerification } from '@/states/guestUsers/handleRequests';
import { useDispatch, useSelector } from 'react-redux';

interface VerifyEmailProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>
    userData: GuestUserData
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ userData, setCurrentStep }) => {

    const dispatch = useDispatch()
    const { loading } = useSelector((state: any) => state.guestUsers)
    const { getValueAsStr, setValue } = useLocalStorage()

    const handleContinue = () => {
        console.log('verification email')

        dispatch(checkVerification({ guestUserId: getValueAsStr("userId") })).unwrap().then(
            (payload: any) => {
                if (payload) {
                    setCurrentStep(prev => {
                        setValue("currentStep", String(Math.min(4 - 1, prev + 1)))
                        return Math.min(4 - 1, prev + 1)
                    })


                }

            },
            (error: any) => {
                console.error("Failed :", error);
            }
        );

    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white rounded-lg shadow-md p-10 mt-16 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Verify Your Email</h2>
                <>
                    <p className="mb-4 text-center">We sent a verification link to your email address. Please check it</p>
                    <Button isLoading={loading} onClick={handleContinue} color="primary" size="lg">Continue</Button>
                </>
            </div>
        </div>
    )
}

export default VerifyEmail