import SideBar from "./component/sidebar"
import { personalData } from "./data/page-data"
import './styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>My Resume</title>
        </head>
      <body className="flex flex-col sm:flex-row">
        <SideBar/>
        <main className="grow-full p-16 w-full sm:basis-2/3 ml-auto"> {children} </main>
        </body>
    </html>
  )
}
