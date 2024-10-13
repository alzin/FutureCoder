import React from 'react';
import dynamic from "next/dynamic";

// Global Sections
import Header from "@/shared-sections/Header";
import Footer from "@/shared-sections/Footer";

import BookFree from './sections/BookFree';

// Components
import Loading from "@/shared-components/Loading";

interface FreeLessonProps {
    data: Record<string, any>;
}

const index: React.FC<FreeLessonProps> = ({ data }) => {
    return (
        <>
            <Header data={data.headerSection} />
            <BookFree data={data.bookFreeSection} lang={data.lang} />
            <Footer data={data.footerSection} />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false, loading: () => <Loading />, });
