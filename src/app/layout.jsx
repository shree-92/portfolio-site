import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "About Me",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Add the favicon */}
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className="h-screen w-screen bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
