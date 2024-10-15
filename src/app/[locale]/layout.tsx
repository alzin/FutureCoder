import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLangDir } from 'rtl-detect';
import { ToastContainer } from "react-toastify";

import DataProvider from "@/shared-components/DataProvider";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: {
    default: "Future Coder Online School",
    template: "%s - Future Coder Online School"
  },
  description: "Learn Programming For Kids",
  twitter: {
    card: "summary_large_image"
  }
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

  return (
    <html lang={params.locale} dir={direction}>
      <body className={inter.className}>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
        >
          <DataProvider>
            <NextUIProvider>
              {children}
            </NextUIProvider>
          </DataProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
