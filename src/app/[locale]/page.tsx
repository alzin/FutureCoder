import Home from "@/pages/Home";
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
      heroImage: t.raw("homePage.heroSection.heroImage"),
    },

    featuresSection: {
      title: "",
      description: "",
      features: [
        {
          id: 1,
          image: "",
          title: "",
          description: ""
        },
        {
          id: 2,
          image: "",
          title: "",
          description: ""
        }
      ],
      signInBtn: ""
    },

    coursesSection: {
      title: "",
      description: "",
      viewAllBtn: "",
      courses: [
        {
          id: 1,
          title: "",
          prise: "",
          href: "",
          image: ""
        },
        {
          id: 2,
          title: "",
          prise: "",
          href: "",
          image: ""
        },
      ]

    },

    testimonialSection: {
      testimonials: [
        {
          id: 1,
          rate: 5,
          opinion: "",
          firstName: "",
          lastName: "",
          work: "",
          imageProfile: ""
        },
        {
          id: 2,
          rate: 3,
          opinion: "",
          firstName: "",
          lastName: "",
          work: "",
          imageProfile: ""
        },
      ],
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

