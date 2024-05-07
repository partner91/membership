import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Membership app',
  description: 'CRUD membership application',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`felx flex-col grow ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}