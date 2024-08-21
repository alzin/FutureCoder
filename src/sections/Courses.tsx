"use client"
import React from 'react';
import Container from '@/components/Container';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


interface CoursesProps {
    data: Record<string, any>;
}

const Courses: React.FC<CoursesProps> = ({ data }) => {
    return (
        <Container>
            <div id="Courses" className='w-full mt-40'>
                <h1 className='text-5xl font-bold'>{data.title}</h1>
                <div className='flex items-center justify-between py-7 pb-16'>
                    <p className='text-sm'>{data.description}</p>
                    <Button>
                        <Link href={data.href}>
                            {data.viewAllBtn}
                        </Link>
                    </Button>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10} // Space between slides
                    pagination={{ clickable: true }} // Enable pagination
                    navigation={true}
                    className='courses'
                    modules={[Navigation, Pagination, A11y]} // Include necessary modules
                    breakpoints={{
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }}
                >
                    {data.courses.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <Card shadow="none" className='sm:mb-0 mb-7'>
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
                                        <p className="text-sm text-center">{item.prise}</p>
                                    </div>
                                    <Button className='w-full'>
                                        <Link href={data.href} className='w-full'>
                                            {data.viewAllBtn}
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </Container>
    );
};

export default Courses;