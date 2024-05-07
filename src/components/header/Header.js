import Logo from '../ui/logo/Logo';
import UserDetails from '../ui/userdetails/UserDetails';
export default function Header() {
  return (
    <header className='flex px-8 py-4 border-b-2 justify-between'>
      <Logo />
      <UserDetails className='border-l-[1px] pl-8' />
    </header>
  );
}
