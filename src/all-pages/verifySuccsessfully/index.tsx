
// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import Container from "@/shared-components/Container";


const VerifyEmailSuccessfully = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <Container>
                <div className="flex mt-8 w-full flex-col items-center justify-center">
                    <div className="bg-white rounded-lg shadow-md p-10 w-full max-w-sm text-center">
                        <h2 className="text-3xl font-bold text-green-600 mb-6">Email Verified Successfully!</h2>
                        <p className="mb-8 text-xl text-gray-700">Thank you for verifying your email address.</p>
                        <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">Go to Home Page</a>
                    </div>
                </div>
            </Container>
            <Footer data={data.footerSection} />
        </>
    )
}

export default VerifyEmailSuccessfully