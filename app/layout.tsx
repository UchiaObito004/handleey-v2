import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handleey Software Pvt Ltd | Digital Transformation & IT Solutions",
  description: "Empowering businesses with cutting-edge software development, data analysis, cloud solutions, and digital transformation strategy.",
  keywords: ["Software Development", "Data Analysis", "IT Consulting", "Handleey Software", "Tech Solutions"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
