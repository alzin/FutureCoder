"use client"

import React, { useEffect } from 'react';
import Container from '@/shared-components/Container';
import LoadingData from '@/shared-components/LoadingData';
import { useDispatch, useSelector } from 'react-redux';
import { getLastBlogs } from '@/services/blogs/handleRequests';
import BlogsCard from './components/BlogsCard';
import { motion } from 'framer-motion';

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
                <motion.h1
                    className='text-4xl text-purple-700 font-black'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Latest Blog Posts
                </motion.h1>
                <LoadingData data={lastBlogs} emptyMessage="Blogs is Empty">
                    <div className="gap-5 grid grid-cols-1 sm:grid-cols-3 w-full mt-7">
                        {lastBlogs?.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <BlogsCard key={item.id} blogData={item} />
                            </motion.div>

                        ))}
                    </div>
                </LoadingData>

            </div>
        </Container>
    );
};

export default LastBlogs;