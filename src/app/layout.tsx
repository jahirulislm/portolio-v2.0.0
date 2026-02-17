import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Mounted } from "@/components/Mounted";
import BackgroundGrid from "@/components/BackgroundGrid";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "dev@Jahirulislam:~$ | Full-Stack Developer",
  description:
    "Jahirul islam's personal portfolio as a full-stack developer specialized in JavaScript, Python,PHP, Golang and related libraries, frameworks. Showcasing projects, skills, and experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-mono antialiased bg-[#0a0a0a]`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Mounted>
            <BackgroundGrid />
          </Mounted>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
