"use client"

import { useEffect } from "react";
import { Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { getBlogs } from "@/services/blogs/handleRequests";
import { setCurrentPage } from "@/services/blogs/blogsSlice";

import BlogsCard from "./components/BlogsCard";
import LoadingData from '@/shared-components/LoadingData';
import Container from "@/shared-components/Container";

const BlogsList: React.FC = () => {

    const dispatch = useDispatch()
    const { blogs, currentPage, totalCount } = useSelector((state: any) => state.blogs)

    useEffect(() => {
        dispatch(getBlogs({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <section className=" overflow-hidden">
            <Container>
                <LoadingData data={blogs} emptyMessage="Blogs is Empty" className="min-h-[calc(100vh-200px)] w-full mt-[100px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {blogs?.map((item: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <BlogsCard key={item.id} blogData={item} />
                            </motion.div>
                        ))}
                    </div>
                    <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />
                </LoadingData>
            </Container>
        </section>
    );
};

export default BlogsList;