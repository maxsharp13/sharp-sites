import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Sharp Sites | Web Design for Small Businesses",
    description:
      "Sharp Sites builds modern, high-performing websites for small businesses. Clean design, fast performance, and built to convert visitors into customers.",
  
    keywords: [
      "web design",
      "website developer",
      "small business websites",
      "Tulsa web design",
      "freelance web developer",
    ],
  
    authors: [{ name: "Max Sharpnack" }],
  
    openGraph: {
      title: "Sharp Sites",
      description:
        "Modern websites built for growth, performance, and conversions.",
      url: "https://sharpsitesweb.com",
      siteName: "Sharp Sites",
      type: "website",
    },
  
    icons: {
      icon: "/favicon.png",
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-textMain">
        <Navbar />
        {children}
      </body>
    </html>
  );
}