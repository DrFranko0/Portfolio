import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Portfolio",
  description: "See For Yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}