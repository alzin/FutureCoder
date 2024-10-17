import type { Metadata } from "next";

import Course from "@/all-pages/courses/course";
import { useTranslations } from "next-intl";
import { Api } from "@/constants/api";
import { headers } from "@/constants/headers";

interface CoursePageProps {
  params: { id: string }
}
// interface Courses {
//   0: {
//     data: {
//       data: Course[]
//     }
//   }
// }

interface Coursee {
  0: {
    data: Course
  }
}


// export async function generateStaticParams() {
//   const response = await fetch(`${Api}/courses`, { headers })
//   const courses: Courses = await response.json()
//   return courses[0].data.data.map(({ id }) => id)
// }

export async function generateMetadata({
  params: { id }
}: CoursePageProps): Promise<Metadata> {

  const response = await fetch(`${Api}/courses?id=${id}`, { headers })
  const course: Coursee = await response.json()
  return {
    title: course[0].data.title,
    description: course[0].data.description,
    openGraph: {
      images: [
        {
          url: course[0].data.imagePath,
          type: "image/png",
          width: "1200",
          height: "630"
        }
      ]
    }
  }
}


export default function CoursePage({
  params: { id }
}: CoursePageProps) {

  const t = useTranslations()

  const coursePageData = {
    lang: t.raw("shared.lang"),

    headerSection: {
      navItems: t.raw("shared.headerSection.navItems"),
      langList: t.raw("shared.headerSection.langList"),
      logIn: t.raw("shared.headerSection.logIn"),
      lang: t.raw("shared.lang"),
    },

    footerSection: {
      links: t.raw("shared.footerSection.links"),
      subscribe: t.raw("shared.footerSection.subscribe"),
      placeHolder: t.raw("shared.footerSection.placeHolder"),
      submitButton: t.raw("shared.footerSection.submitButton"),
      subscribeExplain: t.raw("shared.footerSection.subscribeExplain"),
      policyLinks: t.raw("shared.footerSection.policyLinks"),
      copyWrite: t.raw("shared.footerSection.copyWrite")
    },

  }

  return (
    <>
      <Course data={coursePageData} id={id} />
    </>
  )
}

