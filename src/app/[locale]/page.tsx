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

    },

  }

  return (
    <>
      <Home data={homePageData} />
    </>
  )
}

