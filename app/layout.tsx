import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Durckheim Oncology Academy", description: "Secure Scandinavian-standard oncology education for doctors, nurses, professors and healthcare leaders across Africa.", openGraph: { title: "Durckheim Oncology Academy", description: "Scandinavian oncology education. Built for Africa.", images: ["/og.png"] }, twitter: { card: "summary_large_image", title: "Durckheim Oncology Academy", description: "Scandinavian oncology education. Built for Africa.", images: ["/og.png"] }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
