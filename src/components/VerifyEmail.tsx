import React, { useState } from 'react'
import { Button } from '@nextui-org/react'
import useLocalStorage from '@/hooks/useLocalStorage'

interface VerifyEmailProps {
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>

}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ setCurrentStep }) => {

    const [verify, setVerify] = useState(true)
    const { setValue } = useLocalStorage()

    
    const handleResendVerification = () => {
        console.log('Resend verification email')
    }

    const handleContinue = () => {
        console.log('continue')
        setCurrentStep(prev => {
            setValue("currentStep", String(Math.min(3 - 1, prev + 1)))
            return Math.min(3 - 1, prev + 1)
        })
    }

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white rounded-lg shadow-md p-10 mt-16 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Verify Your Email</h2>

                {verify ? (
                    <>
                        <p className="mb-4 text-center">Thank you for verifying your email address.</p>
                        <Button onClick={handleContinue} color="primary" size="lg">Continue</Button>
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-center">We sent a verification link to your email address.</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default VerifyEmail