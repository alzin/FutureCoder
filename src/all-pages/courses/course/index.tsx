// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

import OneCourse from "./sections/OneCourse";

interface CourseProps {
    data: any,
    id: string
}

const Course: React.FC<CourseProps> = ({ data, id }) => {


    if (!data?.headerSection) {
        return "loading ... "
    }


    return (
        <>
            <Header data={data.headerSection} />
            <OneCourse data={data} id={id} />
            <Footer data={data.footerSection} />

        </>
    )
}

export default Course