import React from 'react';
import Container from '@/components/Container';
import { Button } from "@nextui-org/react";

interface FeaturesProps {
    data: Record<string, any>;
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
    return (
        <Container>
            <div id="Features">
                Features
            </div>
        </Container>
    );
};

export default Features;