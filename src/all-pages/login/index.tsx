// sections
import Container from "@/shared-components/Container";
import Footer from "@/shared-sections/Footer";
import Header from "@/shared-sections/Header";

const Login = ({ data }: any) => {

    return (
        <>
            <Header data={data.headerSection} />
            <Container className="min-h-screen">
                Login Page
            </Container>
            <Footer data={data.footerSection} />

        </>
    )
}

export default Login