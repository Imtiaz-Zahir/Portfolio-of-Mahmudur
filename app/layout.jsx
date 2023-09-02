import "./globals.css";
import Nav from "@/components/nav";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { handler } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(handler);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav user={session?.user} />
        {children}
      </body>
    </html>
  );
}