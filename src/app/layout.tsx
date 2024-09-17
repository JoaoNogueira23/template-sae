import type { Metadata } from "next";
import "./globals.sass";
import { Roboto } from "next/font/google";
import Header from "@/components/Header";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin']
}
)

export const metadata: Metadata = {
  title: "SAE Unicampo",
  description: "Web Site SAE Unicamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
