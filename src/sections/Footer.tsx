import React from 'react';
import Container from '@/components/Container';
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';

interface FooterProps {
    data: Record<string, any>;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <Container>
            <footer className='w-full'>
                <div className='py-10 border-b-2 flex items-start justify-between w-full flex-col lg:flex-row'>
                    <div>
                        <span className=' font-extrabold text-xl'>Logo</span>
                        <ul className='flex items-center justify-start py-5 gap-5'>
                            {data.links.map((item: any) =>
                                <li key={item.id}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className='mt-5 lg:mt-0 w-full sm:w-fit'>
                        <span>{data.subscribe}</span>
                        <div className='flex items-center justify-between gap-2 py-3 flex-col sm:flex-row w-full'>
                            <Input className='border-2 rounded-2xl w-full sm:w-fit' size={"md"} type="email" label="" placeholder={data.placeHolder} />
                            <Button className='w-full sm:w-fit'>{data.submitButton}</Button>
                        </div>
                        <span className='text-xs'>{data.subscribeExplain}</span>
                    </div>
                </div>
                <div className='py-5 flex items-center justify-between w-full'>
                    <ul className='flex items-center justify-start gap-5'>
                        {data.policyLinks.map((item: any) =>
                            <li key={item.id} className=' underline text-sm'>
                                <Link href={item.href}>{item.name}</Link>
                            </li>
                        )}
                    </ul>
                    <span>&copy; {new Date().getFullYear()}</span>
                </div>

            </footer>
        </Container>
    );
};

export default Footer;