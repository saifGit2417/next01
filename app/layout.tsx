import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description:
    "Generated by create next app i have changed meta data at root level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* un-comment the code to see the global layout */}

        {/* <header style={{ background: "blue", padding: "1rem", margin: "1rem" }}>
          <h1>This is header for root level</h1>
          <p>
            this is example of creating global layout this will be available
            throughout out web applications
          </p>
        </header> */}

        {children}

        {/* <footer style={{ background: "red", padding: "1rem", margin: "1rem" }}>
          <h1>This is footer for root level</h1>
          <p>
            this is example of nested layout this will nbe only available in
            auth folder not at root level
          </p>
        </footer> */}
      </body>
    </html>
  );
}
