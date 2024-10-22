import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

// sections
import CoursesList from "./sections/CoursesList";

import Loading from "@/shared-components/Loading";


const index = ({ data }: any) => {
    return (
        <>
            <Header data={data.headerSection} />
            <CoursesList data={data.coursesListSection} lang={data.lang} />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
