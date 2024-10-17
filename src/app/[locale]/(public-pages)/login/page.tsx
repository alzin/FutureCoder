import Login from "@/all-pages/login";
import { useTranslations } from "next-intl";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login Description",
};

export default function LoginPage() {

  const t = useTranslations()

  const loginPageData = {
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
      <Login data={loginPageData} />
    </>
  )
}

