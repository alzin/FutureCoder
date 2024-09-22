"use client"

import Container from "@/components/Container";
import { Card, CardBody, CardFooter, Image, Button, Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '@/states/courses/handleRequests';
import { useEffect } from "react";
import Link from 'next/link';
import LoadingData from '@/components/LoadingData';
import { setCurrentPage } from "@/states/courses/coursesSlice";


const AllCourses: React.FC = () => {

    const dispatch = useDispatch()
    const { courses, currentPage, totalCount } = useSelector((state: any) => state.courses)

    useEffect(() => {
        dispatch(getCourses({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <Container>
            <LoadingData data={courses} emptyMessage="Courses is Empty" className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {courses?.map((item: any) => (
                        <Card key={item.id} shadow="none" className='sm:mb-0 mb-7'>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow='none'
                                    radius="lg"
                                    width="100%"
                                    height={300}
                                    alt={item.title}
                                    className="w-full object-cover aspect-auto"
                                    src={item.imagePath}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex-col">
                                <div className='flex items-center justify-between py-3 w-full'>
                                    <p className='text-sm text-center'>{item.title}</p>
                                    <p className="text-sm text-center">{item.price}</p>
                                </div>
                                <Button className='w-full'>
                                    <Link href={`/courses/${item.id}`} className='w-full'>
                                        View Details
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />

            </LoadingData>
        </Container>
    );
};

export default AllCourses;