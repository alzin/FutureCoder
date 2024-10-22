import Courses from "@/all-pages/courses";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses List",
  description: "Courses Description",
};


export default function CoursesPage() {
  const t = useTranslations()

  const coursesPageData = {
    lang: t.raw("shared.lang"),

    headerSection: {
      navItems: t.raw("shared.headerSection.navItems"),
      langList: t.raw("shared.headerSection.langList"),
      logIn: t.raw("shared.headerSection.logIn"),
      lang: t.raw("shared.lang"),
    },
    coursesListSection: {
      age: t.raw("coursesPage.coursesListSection.age"),
      duration: t.raw("coursesPage.coursesListSection.duration"),
      outline: t.raw("coursesPage.coursesListSection.outline"),
      detailsBtn: t.raw("coursesPage.coursesListSection.detailsBtn"),
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
      <Courses data={coursesPageData} />
    </>
  )
}

