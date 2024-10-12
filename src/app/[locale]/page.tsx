import Home from "@/all-pages/home";
import { useTranslations } from "next-intl";

export default function HomePage() {

  const t = useTranslations()

  const homePageData = {
    lang: t.raw("shared.lang"),

    headerSection: {
      navItems: t.raw("shared.headerSection.navItems"),
      langList: t.raw("shared.headerSection.langList"),
      logIn: t.raw("shared.headerSection.logIn"),
      lang: t.raw("shared.lang"),
    },

    heroSection: {
      title: t.raw("homePage.heroSection.title"),
      paragraph: t.raw("homePage.heroSection.paragraph"),
      lessonBtn: t.raw("homePage.heroSection.lessonBtn"),
      hrefLesson: t.raw("homePage.heroSection.hrefLesson"),
      heroImage: t.raw("homePage.heroSection.heroImage"),
    },

    featuresSection: {
      title: t.raw("homePage.featuresSection.title"),
      description: t.raw("homePage.featuresSection.description"),
      features: t.raw("homePage.featuresSection.features"),
      signInBtn: t.raw("homePage.featuresSection.signInBtn")
    },

    coursesSection: {
      title: t.raw("homePage.coursesSection.title"),
      description: t.raw("homePage.coursesSection.description"),
      viewAllBtn: t.raw("homePage.coursesSection.viewAllBtn"),
      href: t.raw("homePage.coursesSection.href"),
      courses: t.raw("homePage.coursesSection.courses")
    },

    testimonialSection: {
      testimonials: t.raw("homePage.testimonialSection.testimonials")
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
      <Home data={homePageData} />
    </>
  )
}

