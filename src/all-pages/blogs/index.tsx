import dynamic from "next/dynamic";

// sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";
import AllBlogs from "@/all-pages/blogs/sections/AllBlogs";

import Loading from "@/shared-components/Loading";

const index = ({ data }: any) => {

    if (!data?.headerSection) {
        return <Loading />
    }

    return (
        <>
            <Header data={data.headerSection} />
            <AllBlogs />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
