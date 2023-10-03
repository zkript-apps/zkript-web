import Header from "@/components/Header"
import "./global.css"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pakil - Home",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>
        Zkript - Software Development Company based in the Philippines
      </title>
      <link rel="icon" type="image/x-icon" href="/favicon.png" />
      <meta
        name="description"
        content="Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software development company based in the Philippines. Start building amazing and reliable Software with us. Website, web application, mobile application, desktop application, you name it, we can build it for you."
      />
      <meta
        property="og:title"
        content="Zkript - Software Development Company based in the Philippines"
      />
      <meta
        property="og:description"
        content="Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software development company based in the Philippines. Start building amazing and reliable Software with us. Website, web application, mobile application, desktop application, you name it, we can build it for you."
      />
      <meta
        property="og:image"
        content="/og-img-zkript-software-development.png"
      />
      <body className={manrope.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
