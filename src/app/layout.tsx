import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "바리스타 자격증 가이드 | 시험정보, 합격후기, 취업정보",
  description: "바리스타 자격증 종류 비교, 시험 일정, 합격 후기, 독학 vs 학원, 취업/창업 정보까지. 바리스타를 꿈꾸는 분들을 위한 완벽 가이드.",
  keywords: "바리스타 자격증, 바리스타 시험, 바리스타 학원, 커피 자격증, SCA, 한국바리스타협회",
  verification: {
    google: "BBDle2H1N6g_3XGHGG0ObJEWzpgZYs43-lLDtpGZvkg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
