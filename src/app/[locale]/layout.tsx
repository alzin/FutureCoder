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
    template: "%s | Future Coder Online School"
  },
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt impedit mollitia minus quos, voluptatem dicta quasi neque! Quo iste tenetur accusantium, quam modi officia quos itaque at ducimus ipsam, beatae suscipit corrupti. Unde, dolorem numquam autem excepturi fuga sit magni libero molestias vitae nam ipsa laboriosam, a eveniet sequi assumenda vel! Ipsum quod voluptatem magnam repellat veniam. Animi repellendus nulla tempora esse dolores nobis sit in, asperiores voluptatum officia quibusdam tempore deleniti maiores distinctio veniam sunt vitae laudantium, doloribus quam, error fugiat! Sit error distinctio dolorum modi ducimus. Esse commodi veritatis quibusdam enim omnis eveniet dicta sed facilis iusto itaque at unde qui natus iste culpa reiciendis consequatur magnam, mollitia alias et, vitae eos veniam asperiores. Ad inventore laboriosam aut omnis laudantium tempore quae reiciendis ut fuga blanditiis? Ea laborum obcaecati aliquam quos vel voluptates. Labore deserunt explicabo quas voluptatem quo? Voluptatum maiores nostrum unde quaerat saepe esse. Aliquam.",
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
