
// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import AllCourses from "./sections/AllCourses";

const Courses = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <AllCourses />
            <Footer data={data.footerSection} />
        </>
    )
}

export default Courses