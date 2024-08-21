import React from 'react';
import Container from '@/components/Container';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

interface FeaturesProps {
    data: Record<string, any>;
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
    return (
        <Container>
            <div id="Features" className='mt-10 w-full'>
                <h1 className='text-4xl font-black text-center max-w-xl leading-[50px] mx-auto'>{data.title}</h1>
                <p className='text-sm text-center mx-auto py-5 max-w-2xl leading-7'>{data.description}</p>
                <div className="gap-5 grid grid-cols-1 sm:grid-cols-3 w-full mt-7">
                    {data.features.map((item: any) => (
                        <Card shadow="none" key={item.id} className='sm:mb-0 mb-7'>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    shadow='none'
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover aspect-auto"
                                    src={item.image}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col">
                                <b className='py-5 text-xl text-center'>{item.title}</b>
                                <p className="text-sm text-center">{item.description}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

            </div>
        </Container>
    );
};

export default Features;