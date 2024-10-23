import { Card, CardBody, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Link from 'next/link';
import Image from "next/image";
interface BlogsCardProps {
    blogData: Blog
    readMoreBtn: string
    lang: string
}

const BlogsCard: React.FC<BlogsCardProps> = ({ blogData, readMoreBtn, lang }) => {
    return (
        <Card className='sm:mb-0 mb-7 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 overflow-hidden'>
            <CardHeader className="overflow-visible p-0 relative w-full h-80">
                <Image
                    fill
                    alt={blogData.title}
                    className="w-full object-cover aspect-auto"
                    src={blogData.ImagePath}
                />
            </CardHeader>

            <CardBody className={`px-7 mt-3 flex flex-col items-start ${lang === "en" ? "text-left" : "text-right"}`}>
                <h1 className="text-xl font-bold text-purple-700 line-clamp-5 h-28 px-1">{blogData.title}</h1>
                <p className="my-3 px-1 text-purple-500 line-clamp-2">{blogData.description}</p>

                <div className='flex items-center justify-between pb-3 w-full'>
                    {/* <span>
                        <p className='text-xs text-white text-center py-1 px-2 bg-purple-500line-clamp-2 rounded'>tags</p>
                    </span> */}
                    <p className="text-sm text-center text-purple-500">{blogData.created_at.split('T')[0]}</p>
                </div>
            </CardBody>

            <CardFooter className="text-small flex-col">
                <Button
                    as={Link}
                    href={`blogs/${blogData.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                >
                    {readMoreBtn}
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BlogsCard