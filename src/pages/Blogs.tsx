// sections
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Container from "@/components/Container";


const Blogs = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <Container>
                Blogs Page
            </Container>
            <Footer data={data.footerSection} />

        </>
    )
}

export default Blogs