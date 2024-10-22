import type { Metadata } from "next";

import Course from "@/all-pages/courses/course";
import { useTranslations } from "next-intl";
import { Api, headers } from "@/constants";
import { cookies } from "next/headers";

interface CoursePageProps {
  params: { id: string }
}

interface Coursee {
  data: Course
}

export async function generateMetadata({
  params: { id }
}: CoursePageProps): Promise<Metadata> {
  const response = await fetch(`${Api}/courses?id=${id}&language=${cookies().get("NEXT_LOCALE")?.value}`, { headers })
  const course: Coursee = await response.json()
  return {
    title: course.data.title,
    description: course.data.description,
    openGraph: {
      images: [
        {
          url: course.data.imagePath,
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
    courseDetailsSection: {
      age: t.raw("coursePage.courseDetailsSection.age"),
      duration: t.raw("coursePage.courseDetailsSection.duration"),
      teacher: t.raw("coursePage.courseDetailsSection.teacher"),
      courseStart: t.raw("coursePage.courseDetailsSection.courseStart"),
      buyBtn: t.raw("coursePage.courseDetailsSection.buyBtn"),
      years: t.raw("coursePage.courseDetailsSection.years"),
      hours: t.raw("coursePage.courseDetailsSection.hours"),
      outline: t.raw("coursePage.courseDetailsSection.outline"),
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

