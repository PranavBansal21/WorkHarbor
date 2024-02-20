import "./globals.css"

export const metadata = {
  title: "TaskHarbour",
  description: "One time solution for service proviers and service seekers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
