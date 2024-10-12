import React from 'react';
import Header from '@/shared-sections/Header';
import BookFree from './sections/BookFree';
import Footer from '@/shared-sections/Footer';

interface FreeLessonProps {
    data: Record<string, any>;
}

const FreeLesson: React.FC<FreeLessonProps> = ({ data }) => {

    if (!data?.headerSection) {
        return "loading ... "
    }

    return (
        <>
            <Header data={data.headerSection} />
            <BookFree data={data.bookFreeSection} lang={data.lang} />
            <Footer data={data.footerSection} />
        </>
    );
};

export default FreeLesson;