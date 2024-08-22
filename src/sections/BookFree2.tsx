"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import { useLocale } from 'next-intl';
import { I18nProvider } from "@react-aria/i18n";
import { DateObject } from 'react-multi-date-picker';
import DatePicker from 'react-multi-date-picker';


import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone, isWeekend } from "@internationalized/date";

interface BookFree2Props {
    data: Record<string, any>;
    lang: any;

}

const BookFree2: React.FC<BookFree2Props> = ({ data, lang }) => {

    const [date, setDate] = useState(today(getLocalTimeZone()))
    const availableDates: string[] = [
        "22/08/2024", "23/08/2024", "25/08/2024",
        "27/08/2024", "29/08/2024", "01/09/2024",
        "02/09/2024", "22/09/2024", "10/09/2024",
        "01/01/2025"
    ];

    function createDateObject(dateString: string): DateObject {
        const [day, month, year] = dateString.split("/").map(Number);
        const jsDate = new Date(year, month - 1, day);
        return new DateObject(jsDate);
    }


    const availableDateObjects: DateObject[] = availableDates.map(createDateObject);
    const [selectedDate, setSelectedDate] = useState<DateObject | null | undefined>(undefined);

    return (
        <Container>
            <div id="BookFree2Lesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <DatePicker
                    type='calender'
                    value={selectedDate}
                    onChange={setSelectedDate}
                    mapDays={({ date }) => {
                        const isAvailable = availableDateObjects.some(availableDate =>
                            availableDate.year === date.year &&
                            availableDate.month === date.month &&
                            availableDate.day === date.day
                        );

                        return {
                            disabled: !isAvailable,
                            style: {
                                textDecoration: !isAvailable ? 'line-through' : 'none',
                                color: !isAvailable ? '#ccc' : '',
                            },
                        };
                    }}
                />
                <span className='my-5'>{date.toString()}</span>



            </div>
        </Container>
    );
};

export default BookFree2;