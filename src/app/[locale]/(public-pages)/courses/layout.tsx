import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "courses",
  description: "courses description",
};

export default function CoursesLayout({
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
