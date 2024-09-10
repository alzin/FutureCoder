
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
    FirstName: string | undefined,
    LastName: string | undefined,
    Age: string | undefined,
    Email: string | undefined,
    CourseId: string | undefined,
    SessionTimings:string | undefined,
}

type GuestUserData = {
    firstName:string | undefined,
    lastName:string | undefined,
    age:number | undefined,
    email:string | undefined,
    timeZone:string | undefined
}