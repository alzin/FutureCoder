import FreeLesson from "@/all-pages/bookingFreeLesson"
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Free Lesson",
  description: "Book A Free Lesson Description",
};

export default function FreeLessonPage() {

  const t = useTranslations()

  const FreeLessonPageData = {
    lang: t.raw("shared.lang"),

    headerSection: {
      navItems: t.raw("shared.headerSection.navItems"),
      langList: t.raw("shared.headerSection.langList"),
      logIn: t.raw("shared.headerSection.logIn"),
      lang: t.raw("shared.lang"),
    },

    bookFreeSection: {
      nextBtn: t.raw("bookingFreePage.bookFreeSection.nextBtn"),
      previousBtn: t.raw("bookingFreePage.bookFreeSection.previousBtn"),
      stepOne: t.raw("bookingFreePage.bookFreeSection.stepOne"),
      stepTwo: t.raw("bookingFreePage.bookFreeSection.stepTwo"),
      stepThree: t.raw("bookingFreePage.bookFreeSection.stepThree"),
      stepFour: t.raw("bookingFreePage.bookFreeSection.stepFour"),
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
      <FreeLesson data={FreeLessonPageData} />
    </>
  )
}

