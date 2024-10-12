// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import OneBlog from "./sections/OneBlog";

interface BlogProps {
    data: any,
    id: string
}

const Course: React.FC<BlogProps> = ({ data, id }) => {


    if (!data?.headerSection) {
        return "loading ... "
    }


    return (
        <>
            <Header data={data.headerSection} />
            <OneBlog data={data} id={id} />
            <Footer data={data.footerSection} />

        </>
    )
}

export default Course