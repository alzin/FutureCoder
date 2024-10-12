import type { Metadata } from "next";

import Blog from "@/all-pages/blogs/blog";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog description",
};

export default function BlogPage({ params }: { params: { id: string } }) {
  const t = useTranslations()

  const BlogPageData = {
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
      <Blog data={BlogPageData} id={params.id} />
    </>
  )
}

