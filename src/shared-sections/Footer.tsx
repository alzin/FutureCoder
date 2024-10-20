"use client"

import React from 'react';
import Container from '@/shared-components/Container';
import { Button, Input } from "@nextui-org/react";
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addSubscriber } from '@/services/subscribers/handleRequests';
import { motion } from 'framer-motion';
import SocialLink from './components/SocialLink';
interface FooterProps {
    data: {
        links: Array<{ id: string; href: string; name: string }>;
        subscribe: string;
        placeHolder: string;
        submitButton: string;
        subscribeExplain: string;
        policyLinks: Array<{ id: string; href: string; name: string }>;
    };
}

const Footer: React.FC<FooterProps> = ({ data }) => {

    const [subscriber, setSubscriber] = useState<Subscriber>({ email: "" })
    const { loading } = useSelector((state: any) => state.subscribers)
    const dispatch = useDispatch()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(addSubscriber({ subscriber })).unwrap().then(
            () => {
                setSubscriber({ email: "" })
            },
            (error: any) => {
                console.error("Failed to subscribe:", error);
            }
        );

    }

    return (
        <footer className='bg-purple-100'>
            <Container>
                <div className='w-full mt-20'>
                    <div className="py-10 border-b-2 border-purple-200 flex flex-col lg:flex-row items-start justify-between w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="font-extrabold text-3xl text-purple-700">Future Coder</span>
                            <ul className="flex flex-wrap items-center justify-start py-5 gap-5">
                                {data.links.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href={item.href} className="text-purple-600 hover:text-purple-800 transition-colors">
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className='flex items-center justify-start gap-4'>
                                <SocialLink name='whatsapp' link='https://wa.me/message/WMTMY6ZZOZ2KH1' />
                                <SocialLink name='facebook' link='https://www.instagram.com/futurecoder5/profilecard/?igsh=eTlhN3cwYXl6NXUy' />
                                <SocialLink name='instagram' link='https://www.facebook.com/FutureCoderOnlineSchool' />
                            </div>
                        </motion.div>
                        <motion.div
                            className="mt-5 lg:mt-0 w-full sm:w-96"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="text-lg font-semibold text-purple-700">{data.subscribe}</span>
                            <form className="flex flex-col sm:flex-row items-center justify-between gap-2 py-3 w-full" onSubmit={handleSubmit}>
                                <Input
                                    value={subscriber.email}
                                    onChange={(e) => setSubscriber({ email: e.target.value })}
                                    required
                                    type="email"
                                    placeholder={data.placeHolder}
                                    className="w-full sm:w-64"
                                />
                                <Button
                                    type="submit"
                                    isDisabled={loading}
                                    isLoading={loading}
                                    className="w-full sm:w-auto bg-green-500 text-white hover:bg-green-600 transition-colors"
                                >
                                    {data.submitButton}
                                </Button>
                            </form>
                            <span className="text-xs text-purple-600">{data.subscribeExplain}</span>
                        </motion.div>
                    </div>
                    <motion.div
                        className="py-5 flex flex-col sm:flex-row items-center justify-between w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <ul className="flex flex-wrap items-center justify-start gap-5 mb-3 sm:mb-0">
                            {data.policyLinks.map((item) => (
                                <li key={item.id} className="text-sm">
                                    <Link href={item.href} className="text-purple-600 hover:text-purple-800 transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span className="text-purple-700">&copy; {new Date().getFullYear()} Future Coder</span>
                    </motion.div>
                </div>
            </Container>
        </footer>

    );
};

export default Footer;