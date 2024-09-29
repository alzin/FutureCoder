// sections
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Container from "@/components/Container";
import AllBlogs from "@/sections/AllBlogs";

const Blogs = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <AllBlogs />
            <Footer data={data.footerSection} />

        </>
    )
}

export default Blogs