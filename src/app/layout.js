import localFont from "next/font/local";
import NavigationBar from "@/app/components/navigation/navigation-bar";
import "./globals.css";

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
  title: "Brandon Wu",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <NavigationBar/>
          {children}
        </body>
      </html>
    </>
  );
}
