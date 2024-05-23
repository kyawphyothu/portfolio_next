import type { Metadata } from "next";
import { Concert_One, DM_Mono, Inter, Pacifico, Roboto_Slab, Space_Mono, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
// const RobotoSlab = Roboto_Slab({ subsets: ["latin"] })
// const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
// const concert_one = Concert_One({ subsets: ["latin"], weight: "400" })
// const ubuntu_mono = Ubuntu_Mono({subsets: ["latin"], weight: "400"})
const dm_mono = DM_Mono({subsets: ["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Kyaw Phyo Thu",
  description: "Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_mono.className}>{children}</body>
    </html>
  );
}
