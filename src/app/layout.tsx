import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";

import { ThemeProvider } from "~/components/theme-provider";
import TopNav from "~/components/TopNav";
import { Toaster } from "~/components/ui/toaster";
import ReactQueryProvider from "~/components/react-query-provider";

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
      <body className="overflow-y-scroll">
        <ReactQueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <TopNav />
            {children}
            <Toaster />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
