import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book A Free Lesson",
  description: "Book A Free Lesson description",
};

export default function FreeLessonLayout({
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
