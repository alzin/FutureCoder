"use client"

import Container from "@/shared-components/Container";
import { Pagination } from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from "@/services/blogs/handleRequests";
import { useEffect } from "react";
import LoadingData from '@/shared-components/LoadingData';
import { setCurrentPage } from "@/services/blogs/blogsSlice";
import BlogsCard from "./components/BlogsCard";

const AllBlogs: React.FC = () => {

    const dispatch = useDispatch()
    const { blogs, currentPage, totalCount } = useSelector((state: any) => state.blogs)

    useEffect(() => {
        dispatch(getBlogs({ currentPage }))
    }, [dispatch, currentPage])


    const handleChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <Container>
            <LoadingData data={blogs} emptyMessage="Blogs is Empty" className="min-h-[calc(100vh-200px)] w-full mt-[100px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs?.map((item: any) => (
                        <BlogsCard key={item.id} blogData={item} />
                    ))}
                </div>

                <Pagination className="flex items-center justify-center mt-20" total={Math.ceil(totalCount / 5)} page={currentPage} onChange={handleChangePage} />

            </LoadingData>
        </Container>
    );
};

export default AllBlogs;