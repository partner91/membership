import Header from '../components/header/Header';
import Nav from '../components/navigation/Nav';
export default function HomePage() {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex flex-col grow'>
        <aside className='grow'>
          <Nav />
        </aside>
        <main></main>
      </div>
    </div>
  );
}
