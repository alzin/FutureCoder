import Login from "@/pages/Login";
import { useTranslations } from "next-intl";

export default function LoginPage() {

  const t = useTranslations()

  const loginPageData = {
    lang: t.raw("shared.lang"),
  }

  return (
    <>
      <Login data={loginPageData} />
    </>
  )
}

