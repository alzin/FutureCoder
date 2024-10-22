import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

import CourseDetails from "./sections/CourseDetails";

// Components
import Loading from "@/shared-components/Loading";

interface CourseProps {
    data: any,
    id: string
}

const index: React.FC<CourseProps> = ({ data, id }) => {
    return (
        <>
            <Header data={data.headerSection} />
            <CourseDetails data={data.courseDetailsSection} id={id} lang={data.lang} />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });

