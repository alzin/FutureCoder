"use client"

import React, { useEffect } from 'react';
import Container from '@/components/Container';
import LoadingData from '@/components/LoadingData';
import { useDispatch, useSelector } from 'react-redux';
import { getLastBlogs } from '@/states/blogs/handleRequests';
import { BlogsCard } from '@/components/BlogsCard';

interface LastBlogsProps {
    data: Record<string, any>;
}

const LastBlogs: React.FC<LastBlogsProps> = ({ data }) => {

    const { lastBlogs } = useSelector((state: any) => state.blogs)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLastBlogs())
    }, [dispatch])

    return (
        <Container>
            <div id="lastBlogs" className='mt-40 w-full'>
                <h1 className='text-4xl font-black'>Latest Blog Posts</h1>
                <LoadingData data={lastBlogs} emptyMessage="Blogs is Empty">
                    <div className="gap-5 grid grid-cols-1 sm:grid-cols-3 w-full mt-7">
                        {lastBlogs?.map((item: any) => (
                            <BlogsCard key={item.id} blogData={item} />
                        ))}
                    </div>
                </LoadingData>

            </div>
        </Container>
    );
};

export default LastBlogs;