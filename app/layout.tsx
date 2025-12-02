import type { Metadata } from "next";
import "./globals.css";

import TourvisPcGnb from "@/components/tourvis-pc-gnb";
import TourvisBottomTabBar from "@/components/tourvis-bottom-tab-bar";
import TourvisPcFooter from "@/components/tourvis-footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "투어비스 여행",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Script
        src="https://d2um1hurm6o2hd.cloudfront.net/tourvis-static/common/common-widget.js?20250710"
        strategy="afterInteractive"
      />
      <body className="font-pretendard antialiased">
        <TourvisPcGnb env="production" />
        <div className="min-h-screen bg-background flex flex-col">
          <div className="flex-1">{children}</div>
          <TourvisPcFooter env="production" />
        </div>
        <TourvisBottomTabBar env="production" />
      </body>
    </html>
  );
}
