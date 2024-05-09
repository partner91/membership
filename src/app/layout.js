import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/navigation/Navigation';
import Header from '../components/header/Header';

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
        <section className='flex pt-16 overflow-hidden bg-gray-50'>
          <Navigation />
          <main className='pl-64 h-full overflow-y-auto bg-gray-50'>
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
