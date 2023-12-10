import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full h-20 bg-transparent flex items-center justify-between absolute  border-b-2 border-opacity-10 border-white">
      <div className="ml-6">
        <Image
          src="/assets/logo-blizzard.png"
          alt="logo"
          width={69}
          height={32}
        />
      </div>
      <div className="mr-6">
        <Image
          src="/assets/menu.svg"
          alt="detalhe menu"
          width={28}
          height={19}
        />
      </div>
    </header>
  );
};
