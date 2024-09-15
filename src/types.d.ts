
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
    guestUserId: string | undefined
    CourseId: string | undefined,
    SessionTimings: string | undefined,
}

type TimezoneOption = {
    value: string;
    label: string;
}

type GuestUserData = {
    firstName: string | null,
    lastName: string | null,
    age: string | null,
    email: string | null,
    timeZone: TimezoneOption | null | opject
}