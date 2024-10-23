import { Card, CardBody, CardHeader, CardFooter, Button } from "@nextui-org/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from "next/image";


interface BlogsCardProps {
    blogData: Blog
    data: any
    lang: string
}

const BlogsCard: React.FC<BlogsCardProps> = ({ blogData, data, lang }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
        >
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
                    <h1 className="text-xl font-bold text-purple-700 line-clamp-5 h-28">{blogData.title}</h1>
                    <p className="my-3 text-purple-500 line-clamp-2">{blogData.description}</p>

                    <div className='flex items-center justify-between pb-3 w-full'>
                        <p className="text-sm text-center text-purple-500">{blogData.created_at?.split('T')[0]}</p>
                    </div>
                </CardBody>

                <CardFooter className="text-small flex-col">
                    <Button
                        as={Link}
                        href={`/blogs/${blogData.id}`}
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                    >
                        {data.readMoreBtn}
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>

    );
};

export default BlogsCard