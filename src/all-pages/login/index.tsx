import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

// sections
import LogInForm from "./sections/LogInForm";

// components
import Loading from "@/shared-components/Loading";

const index = ({ data }: any) => {

    return (
        <>
            <Header data={data.headerSection} />
            <LogInForm />
            <Footer data={data.footerSection} />
        </>
    )
}

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
