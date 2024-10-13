import dynamic from "next/dynamic";

// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

import BlogsList from "./sections/BlogsList";

import Loading from "@/shared-components/Loading";

const index = ({ data }: any) => {
    return (
        <>
            <Header data={data.headerSection} />
            <BlogsList />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
