import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// // Inter Font
// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
//   display: 'swap',
// });

// // Anton Font
// const anton = Anton({
//   weight: '400',
//   subsets: ['latin'],
//   variable: '--font-anton',
//   display: 'swap',
// });

// export const metadata: Metadata = {
//   title: 'Community Landing Page',
//   description: 'Landing page untuk komunitas eksklusif',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="id">
//       {/* 3. Masukkan variabel font ke dalam tag body */}
//       <body className={`${inter.variable} ${anton.variable} bg-white text-black antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

export const metadata: Metadata = {
  title: "Ex-Snow Community",
  description: "jom join komuniti",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
