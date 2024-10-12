// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import Container from "@/shared-components/Container";
import AllBlogs from "@/all-pages/blogs/sections/AllBlogs";

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