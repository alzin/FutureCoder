import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLangDir } from 'rtl-detect';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "home",
  description: "home description",
};

type Params = {
  locale: string;
};

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Params
}>) {

  const direction = getLangDir(params.locale);
  const messages = useMessages();

  if (!params.locale) {
    return <div>Loading...</div>;
  }

  // if (params.locale) {
  //   notFound()
  // }


  return (
    <html lang={params.locale} dir={direction}>
      <body className={inter.className}>
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
