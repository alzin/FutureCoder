
type Subscriber = {
    email: string | undefined
}

type Course = {
    id: string,
    title: string,
    teacher: string,
    description: string,
    imagePath: string,
    price: number,
    min_age: number,
    max_age: number,
    course_outline: string,
    duration_in_session: number,
    course_start_date: string,
}

type Testimonial = {
    id: string;
    rating: number;
    description: string;
    user: {
        firstName: string;
        lastName: string;
    }
}

type Blog = {
    id: string,
    title: string,
    description: string,
    ImagePath: string,
    created_at: string
}

type BookingFreeCourse = {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    timeZone: string,
    courseId: string,
    sessionTimings: string
}

type TimezoneOption = {
    value: string;
    label: string;
}
