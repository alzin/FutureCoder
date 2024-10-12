import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "login",
  description: "login description",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      {children}
    </main>
  );
}
