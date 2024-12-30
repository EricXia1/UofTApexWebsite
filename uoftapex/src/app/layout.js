import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UofT Apex Legends",
  description: "The website for the Apex Legends club at UofT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta charSet="utf-8"/>
    <link rel="icon" href="./uoftapexlogo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientWrapper>
        {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
