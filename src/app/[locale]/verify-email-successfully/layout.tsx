import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email Successfully",
  description: "VerifyEmail description",
};

export default function VerifyEmailLayout({
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
