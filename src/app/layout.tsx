import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PUTTI POOJITHA NANDA SAI BHAGYA GANESH | Immersive Portfolio',
  description: 'Computer Science Student | AI & Machine Learning Focused Digital Experience',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-white text-black antialiased selection:bg-primary/10 scroll-smooth">
        {children}
      </body>
    </html>
  );
}
