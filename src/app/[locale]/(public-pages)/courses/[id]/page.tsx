import type { Metadata } from "next";

import Course from "@/all-pages/courses/course";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "course",
  description: "course description",
};

export default function CoursePage({ params }: { params: { id: string } }) {
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
      <Course data={coursePageData} id={params.id} />
    </>
  )
}

