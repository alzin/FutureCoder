import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

// Home Setions
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Courses from "./sections/Courses";
import LastBlogs from "./sections/LastBlogs";
import Testimonials from "./sections/Testimonials";

// Components
import Loading from "@/shared-components/Loading";
import WhatsappContact from "@/shared-components/WhatsappContact";

const index = ({ data }: any) => {
    return (
        <>
            <Header data={data.headerSection} />
            <Hero data={data.heroSection} />
            <Features data={data.featuresSection} />
            <Courses data={data.coursesSection} />
            <LastBlogs data={data.headerSection} />
            <Testimonials data={data.testimonialSection} />
            <Footer data={data.footerSection} />
            <WhatsappContact link="https://wa.me/message/WMTMY6ZZOZ2KH1" />
        </>
    );
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });



