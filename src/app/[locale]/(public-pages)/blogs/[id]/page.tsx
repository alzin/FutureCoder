import type { Metadata } from "next";

import Blog from "@/all-pages/blogs/blog";
import { useTranslations } from "next-intl";
import { Api } from "@/constants/api";
import { headers } from "@/constants/headers";

interface BlogPageProps {
  params: { id: string }
}
interface Blogs {
  data: Blog[]
}

export async function generateStaticParams() {
  const response = await fetch(`${Api}/blogs`, { headers })
  const { data }: Blogs = await response.json()
  return data.map(({ id }) => id)
}

export async function generateMetadata({
  params: { id }
}: BlogPageProps): Promise<Metadata> {

  const response = await fetch(`${Api}/blogs?id=${id}`, { headers })
  const blog: Blog = await response.json()

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      type: "article",
      images: [
        {
          url: blog.ImagePath,
          type: "image/png",
          width: "1200",
          height: "630"
        }
      ]
    }
  }
}

export default function BlogPage({
  params: { id }
}: BlogPageProps) {

  const t = useTranslations()
  console.log(id)

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
      <Blog data={BlogPageData} id={id} />
    </>
  )
}

