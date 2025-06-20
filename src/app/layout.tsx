import "./globals.css";

export const metadata = {
  title: "240411100085 | Moch. Zamroni Fahreza",
  description:
    "Web ini dibuat untuk memenuhi tugas Booting & Memory 2024 yaitu website angkatan",
  icons: {
    icon: "/globe.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
