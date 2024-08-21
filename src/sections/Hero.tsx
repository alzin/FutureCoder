import React from 'react';
import Container from '@/components/Container';
import { Button } from "@nextui-org/react";
import Image from 'next/image';

interface HeroProps {
    data: Record<string, any>;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <Container>
            <section id='hero' className='mt-20 xl:my-0 xl:min-h-[calc(100vh-4rem)] w-full flex items-start xl:items-center justify-between gap-20 xl:gap-1 flex-col xl:flex-row'>
                <div className='xl:w-[55%]'>
                    <h1 className='text-4xl xl:text-6xl font-extrabold leading-snug'>{data.title}</h1>
                    <p className='text-base xl:text-xl my-7'>{data.paragraph}</p>
                    <Button>{data.lessonBtn}</Button>
                </div>
                <div className='xl:w-[43%] w-full h-auto aspect-square relative'>
                    <Image src={data.heroImage} alt='hero image' fill  className='object-cover'/>
                </div>
            </section>
        </Container>
    );
};

export default Hero;