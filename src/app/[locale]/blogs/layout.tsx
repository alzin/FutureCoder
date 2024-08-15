import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "blogs",
  description: "blogs description",
};

export default function BlogsLayout({
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
