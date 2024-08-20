import React from 'react';
import Container from '@/components/Container';
import { Button } from "@nextui-org/react";

interface CoursesProps {
    data: Record<string, any>;
}

const Courses: React.FC<CoursesProps> = ({ data }) => {
    return (
        <Container>
            <div id="Courses">
                Courses
            </div>
        </Container>
    );
};

export default Courses;