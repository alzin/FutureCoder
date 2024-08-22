"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import { useLocale } from 'next-intl';
import { I18nProvider } from "@react-aria/i18n";
import { DateObject } from 'react-multi-date-picker';


import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";

interface BookFreeProps {
    data: Record<string, any>;
    lang: any;

}

const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const [date, setDate] = useState(today(getLocalTimeZone()))
    const availableDates = [
        "22/08/2024", "23/08/2024", "25/08/2024",
        "27/08/2024", "29/08/2024", "01/09/2024",
        "02/09/2024", "22/09/2024", "10/09/2024",
        "01/01/2025"
    ].map(dateString => {
        const [day, month, year] = dateString.split("/").map(Number);
        return new Date(year, month - 1, day); // Adjusted for JavaScript's 0-indexed months
    })

    const isDateUnavailable = (dateValue: any): boolean => { // Replace 'any' with the actual type if known
        const date = dateValue.toDate ? dateValue.toDate() : dateValue; // Adjust based on actual API
        return !availableDates.some(availableDate =>
            availableDate.getDate() === date.getDate() &&
            availableDate.getMonth() === date.getMonth() &&
            availableDate.getFullYear() === date.getFullYear());
    };




    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <I18nProvider locale="zh-CN-u-ca-chinese">
                    <Calendar
                        aria-label="Date (International Calendar)"
                        isDateUnavailable={isDateUnavailable}
                        showMonthAndYearPickers={true}
                        hideDisabledDates={true}
                        value={date}
                        onChange={setDate}
                    />
                </I18nProvider>
                <span className='my-5'>{date.toString()}</span>



            </div>
        </Container>
    );
};

export default BookFree;