import React from 'react';
import Container from '@/components/Container';
import { Button } from "@nextui-org/react";

interface TestimonialsProps {
    data: Record<string, any>;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
    return (
        <Container>
            <div id="Testimonials">
                Testimonials
            </div>
        </Container>
    );
};

export default Testimonials;