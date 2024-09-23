
type Subscriber = {
    email: string | undefined
}

type Course = {
    title?: string,
    teacher?: string,
    description?: string,
    image?: string,
    price?: number,
    min_age?: number,
    max_age?: number,
    course_outline?: string,
    duration_in_session?: number,
    course_start_date?: string,
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
