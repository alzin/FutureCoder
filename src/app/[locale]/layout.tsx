
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getLangDir } from 'rtl-detect';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DataProvider from "@/components/DataProvider";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

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

  // useEffect(() => {
  //   Aos.init({
  //     duration: 1400,
  //     once: true,
  //   });
  // }, []);

  return (
    <html lang={params.locale} dir={direction}>
      <body >
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

        {/* className={inter.className} */}
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
