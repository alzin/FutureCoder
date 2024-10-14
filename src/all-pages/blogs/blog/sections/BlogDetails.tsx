"use client"

import { useEffect } from "react"
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { getBlogById } from '@/services/blogs/handleRequests';

import Container from '@/shared-components/Container';
import LoadingData from '@/shared-components/LoadingData';


interface BlogDetailsProps {
    data: Record<string, any>;
    id: string
}


const BlogDetails: React.FC<BlogDetailsProps> = ({ data, id }) => {

    const dispatch = useDispatch()
    const { findBlog } = useSelector((state: any) => state.blogs)

    useEffect(() => {
        dispatch(getBlogById({ blogId: id }))
    }, [dispatch, id])

    return (
        <Container>
            <LoadingData data={findBlog} className="min-h-[calc(100vh-400px)] w-full mt-[100px]">
                <div id="BlogDetails" className='w-full space-y-10'>
                    <motion.h1
                        className='text-4xl font-black text-purple-700'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {findBlog?.title}
                    </motion.h1>

                    <motion.span
                        className='block mt-1 text-purple-500'
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: .3 }}
                    >
                        {findBlog?.created_at.split('T')[0]}
                    </motion.span>

                    <motion.div
                        className="relative w-full h-[500px]"
                        initial={{ opacity: 0, scale: .9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: .6 }}
                    >
                        <Image
                            fill
                            className='object-cover'
                            src={findBlog?.ImagePath}
                            alt={findBlog?.title}
                        />
                    </motion.div>

                    <p>{findBlog?.description}</p>

                    <div className="tags">
                        <h1 className='my-20 text-2xl font-black text-purple-700'>Tags</h1>
                    </div>
                </div>
            </LoadingData>
        </Container>
    );
};

export default BlogDetails;