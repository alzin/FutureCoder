"use client"

import Container from '@/components/Container';
import LoadingData from '@/components/LoadingData';
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogById } from '@/states/blogs/handleRequests';
import { useEffect } from "react"

interface OneBlogProps {
    data: Record<string, any>;
    id: string
}

const OneBlog: React.FC<OneBlogProps> = ({ data, id }) => {

    const dispatch = useDispatch()
    const { findBlog } = useSelector((state: any) => state.blogs)

    useEffect(() => {
        dispatch(getBlogById({ blogId: id }))
    }, [dispatch, id])


    return (
        <Container>
            <LoadingData data={findBlog} className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                <div id="OneBlog" className='w-full space-y-10'>
                    <h1 className='text-4xl font-black'>{findBlog?.title}</h1>
                    <span className='text-gray-500'>{findBlog?.created_at.split('T')[0]}</span>

                    <div className="relative w-full h-[350px]">
                        <Image
                            fill
                            className='object-cover'
                            src={findBlog?.ImagePath}
                            alt={findBlog?.title}
                        />
                    </div>

                    <p>{findBlog?.description}</p>

                    <div className="tags">
                        <h1 className='text-2xl font-black'>Tags</h1>
                    </div>
                </div>
            </LoadingData>

        </Container>
    );
};

export default OneBlog;