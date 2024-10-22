

interface VerifyEmailProps {
    data: any
}

const VerifyEmail: React.FC<VerifyEmailProps> = ({ data }) => {

    return (
        <div className="flex items-center justify-center w-full">
            <div className="bg-white rounded-lg shadow-md p-10 mt-16 w-full max-w-sm">
                <h2 className="text-2xl font-bold text-center mb-6 text-purple-500">{data.verifyEmail}</h2>
                <>
                    <p className="mb-4 text-center">{data.weSent}</p>
                </>
            </div>
        </div>
    )
}

export default VerifyEmail