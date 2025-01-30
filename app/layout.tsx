import "./globals.css";

export const metadata = {
  title: "Next JS",
  description: "Generated by Next.js"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightgoldenrodyellow", padding: "1rem" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{backgroundColor: "lightpink", padding: "1rem"}}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
