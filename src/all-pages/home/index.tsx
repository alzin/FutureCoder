
// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

// Home setions
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Courses from "./sections/Courses";
import LastBlogs from "./sections/LastBlogs";
import Testimonials from "./sections/Testimonials";


const Home = ({ data }: any) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <Hero data={data.heroSection} />
            <Features data={data.featuresSection} />
            <Courses data={data.coursesSection} />
            <LastBlogs data={data.headerSection} />
            <Testimonials data={data.testimonialSection} />
            <Footer data={data.footerSection} />
        </>
    );
}

export default Home



