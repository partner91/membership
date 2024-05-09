import Image from 'next/image';

export default function LogoImage() {
  return <Image src={'/member-card.png'} height={32} width={32} alt='Logo' />;
}
