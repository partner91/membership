import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Membership app',
  description: 'CRUD membership application',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-gray-50'>
        <Header />
        <Navigation />
        <main className='ml-64 mt-16'>{children}</main>
      </body>
    </html>
  );
}
