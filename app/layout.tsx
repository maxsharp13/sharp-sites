import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Sharp Sites",
    description: "Websites built for growth",
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