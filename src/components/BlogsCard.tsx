import { Card, CardBody, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from 'next/link';

interface BlogsCardProps {
    blogData: Blog
}

export const BlogsCard: React.FC<BlogsCardProps> = ({ blogData }) => {
    return (
        <Card className='sm:mb-0 mb-7'>
            <CardHeader className="overflow-visible p-0">
                <Image
                    shadow='none'
                    radius="lg"
                    alt={blogData.title}
                    className="w-full object-cover aspect-auto"
                    src={blogData.ImagePath}
                />
            </CardHeader>

            <CardBody className="px-7 mt-3">
                <h1 className="text-xl font-bold">{blogData.title}</h1>
                <p className="my-3 text-gray-500 line-clamp-2">{blogData.description}</p>

                <div className='flex items-center justify-between pb-3 w-full'>
                    <span>
                        <p className='text-xs text-center py-1 px-2 bg-gray-300 rounded'>tabs</p>
                    </span>
                    <p className="text-sm text-center text-gray-500">{blogData.created_at.split('T')[0]}</p>
                </div>
            </CardBody>

            <CardFooter className="text-small flex-col">
                <Button className='w-full'>
                    <Link href={`blogs/${blogData.id}`} className='w-full'>
                        Show More
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};