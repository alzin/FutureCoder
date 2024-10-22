import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

import BlogDetails from "./sections/BlogDetails";

// Components
import Loading from "@/shared-components/Loading";

interface BlogProps {
    data: any,
    id: string
}

const index: React.FC<BlogProps> = ({ data, id }) => {
    return (
        <>
            <Header data={data.headerSection} />
            <BlogDetails data={data.blogDetailsSection} id={id} lang={data.lang} />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
