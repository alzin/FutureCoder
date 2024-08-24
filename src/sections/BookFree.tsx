"use client"
import React, { useState } from 'react';
import Container from '@/components/Container';
import { DateObject } from 'react-multi-date-picker';
import { Calendar } from 'react-multi-date-picker';
// import gregorian_ar from "react-date-object/locales/gregorian_ar"
// import gregorian_en from "react-date-object/locales/gregorian_en"
import { Button, Input, Card, CardBody, Image, CardFooter } from '@nextui-org/react';

interface BookFreeProps {
    data: Record<string, any>;
    lang: any;
}


const BookFree: React.FC<BookFreeProps> = ({ data, lang }) => {

    const [date, setDate] = useState("")
    const [times, setTimes] = useState<string[]>([])
    const [reservation, setReservation] = useState("")
    const [age, setAge] = React.useState("");

    const handleChange = (value: any) => {
        setDate(value)
        const t: string = value.toString()
        const [year, month, day] = t.split('/');
        const parsedDate: string = `${day}/${month}/${year}`;
        setTimes(allTimes[parsedDate])
        setReservation("")
    }


    const handelReservaltion = (value: any) => {
        setReservation(date.toString() + " --/-- " + value)
    }

    const availableDates: string[] = [
        "22/08/2024", "23/08/2024", "25/08/2024",
        "27/08/2024", "29/08/2024", "01/09/2024",
        "02/09/2024", "22/09/2024", "10/09/2024",
        "01/01/2025"
    ];

    const allTimes: Record<string, string[]> = {
        "22/08/2024": ["08:00:00 - 09:00:00", "10:00:00 - 11:00:00", "13:00:00 - 14:00:00"],
        "23/08/2024": ["08:00:00 - 09:00:00", "10:00:00 - 11:00:00"],
        "25/08/2024": ["10:00:00 - 11:00:00", "13:00:00 - 14:00:00"],
        "27/08/2024": ["08:00:00 - 09:00:00", "10:00:00 - 11:00:00", "13:00:00 - 14:00:00"],
        "29/08/2024": ["08:00:00 - 09:00:00", "16:00:00 - 17:00:00"],
        "01/09/2024": ["08:00:00 - 09:00:00", "10:00:00 - 11:00:00", "13:00:00 - 14:00:00"],
        "02/09/2024": ["08:00:00 - 09:00:00"],
        "22/09/2024": ["08:00:00 - 09:00:00", "10:00:00 - 11:00:00", "13:00:00 - 14:00:00"],
        "10/09/2024": ["10:00:00 - 11:00:00"],
        "01/01/2025": ["10:00:00 - 11:00:00", "13:00:00 - 14:00:00"]
    }


    function createDateObject(dateString: string): DateObject {
        const [day, month, year] = dateString.split("/").map(Number);
        const jsDate = new Date(year, month - 1, day);
        return new DateObject(jsDate);
    }

    const availableDateObjects: DateObject[] = availableDates.map(createDateObject);

    return (
        <Container>
            <div id="BookFreeLesson" className='mt-10 w-full flex items-center justify-center flex-col'>
                <form className="w-full flex items-center gap-2 my-5 mb-20 max-w-lg">
                    <Input
                        type='number'
                        label="Age"
                        placeholder="Enter your Age"
                        value={age}
                        onValueChange={setAge}
                    />
                    <Button type='submit'>Submit</Button>
                </form>

                <div className='flex items-start justify-between w-full gap-10 flex-col md:flex-row'>
                    <div id="CoursesByAge" className='w-full'>
                        <span className='text-2xl font-bold pb-5 block'>All Courses By Age {age}</span>
                        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-5'>
                            {data.courses?.map((item: any) =>
                                <Card key={item.id} shadow="sm" className='sm:mb-0 mb-7'>
                                    <CardBody className="overflow-visible p-0">
                                        <Image
                                            shadow='none'
                                            radius="lg"
                                            width="100%"
                                            height={300}
                                            alt={item.title}
                                            className="w-full object-cover aspect-auto"
                                            src={item.image}
                                        />
                                    </CardBody>
                                    <CardFooter className="text-small flex-col">
                                        <div className='flex items-center justify-between py-3 w-full'>
                                            <p className='text-sm text-center'>{item.title}</p>
                                            {/* <p className="text-sm text-center">{item.prise}</p> */}
                                        </div>
                                        <Button className='w-full'>
                                            Show Dates and Times
                                        </Button>
                                    </CardFooter>
                                </Card>
                            )}

                        </div>
                    </div>

                    <div id="Calender" className='mt-[50px] mx-auto'>
                        <div className='flex items-center justify-center border-2 shadow-lg rounded h-72'>
                            <Calendar
                                zIndex={1}
                                // locale={lang === 'ar' ? gregorian_ar : gregorian_en}
                                monthYearSeparator='/'
                                className='h-full'
                                value={date}
                                onChange={handleChange}
                                mapDays={({ date }) => {
                                    const isAvailable = availableDateObjects.some(availableDate =>
                                        availableDate.year.toString() === date.year.toString() &&
                                        availableDate.month.toString() === date.month.toString() &&
                                        availableDate.day.toString() === date.day.toString()
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
                            <div className='h-full w-40 flex flex-col items-center text-sm'>
                                <p className='pt-4 pb-3 border-b-2 w-full text-center'>Times</p>
                                <div className='overflow-y-auto overflow-x-hidden gap-2 scroll flex flex-col items-center w-full p-2' style={{ scrollbarWidth: "thin" }}>
                                    {times?.map((item: any, index: number) =>
                                        <Button key={index} color="primary" size="sm" className='m-0 min-h-8 w-full' onClick={() => handelReservaltion(item)}>{item}</Button>
                                    )}
                                </div>

                            </div>
                        </div>

                        <span className='my-5 text-center block min-h-10'>{reservation}</span>

                        <form className="w-full space-y-5 gap-2 mt-100 max-w-lg">
                            <Input
                                type='text'
                                label="First Name"
                                placeholder="Enter your First Name"
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <Input
                                type='text'
                                label="Last Name"
                                placeholder="Enter your Last Name"
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <Input
                                type='email'
                                label="Email"
                                placeholder="Enter your Email"
                            // value={age}
                            // onValueChange={setAge}
                            />
                            <Input
                                type='text'
                                label="Reservation"
                                value={reservation}
                                disabled
                            />
                            <Button type='submit'>Submit</Button>
                        </form>
                    </div>
                </div>

            </div>
        </Container>
    );
};

export default BookFree;

