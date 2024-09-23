

interface VerifyEmailProps {
    bookingData: BookingFreeCourse
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ bookingData }) => {

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white rounded-lg shadow-md p-10 mt-16 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Verify Your Email</h2>
                <>
                    <p className="mb-4 text-center">We sent a verification link to your email address. Please check it</p>
                </>
            </div>
        </div>
    )
}

export default VerifyEmail