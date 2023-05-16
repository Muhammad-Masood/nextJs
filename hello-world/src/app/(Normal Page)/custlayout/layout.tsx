export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* ye children sirf page.tsx ko janta hai */}
      <body>
        <h1>Custom Navigation Bar</h1>
        {children}
        </body> 
    </html>
  )
}
