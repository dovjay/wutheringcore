import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "~/components/theme-provider";
import TopNav from "~/components/TopNav";

export const metadata = {
  title: "WutheringCore",
  description: "Curated content to make your wuthering waves experience more exciting!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
