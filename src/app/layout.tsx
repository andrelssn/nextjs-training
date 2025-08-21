import { Metadata } from "next";
import { Header } from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
    title: 'Aula Next JS',
    description: "Aprendendo Next",
    openGraph: {
        title: 'Aprendendo Nextjs',
        description: "Aprendendo Next",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true
        }
    }
} // EXEMPLO DE METADATA

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
            className={`antialiased`}
            cz-shortcut-listen="true"
        >
            <Header/>

            {children}
        </body>
    </html>
  );
}
