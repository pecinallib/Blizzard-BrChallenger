import Image from 'next/image';

export const Header = () => {
  return (
    <header className="w-full h-20 md:h-24 bg-transparent flex items-center justify-between absolute border-b-2 border-opacity-10 border-white">
      <div className="ml-6 md:ml-11 grid place-self-end">
        <Image
          src="/assets/logo-blizzard.png"
          alt="logo"
          width={69}
          height={32}
          className="mb-6 md:mb-8 md:w-[87px]"
        />
        <Image
          src="/assets/Vector 7.svg"
          alt="detalhe-logo"
          width={43}
          height={1}
          className="-mb-2"
        />
      </div>
      <div className="mr-6 flex">
        <div className="hidden md:flex mr-20 gap-4">
          <a className="w-32 h-[41px] px-4 py-2.5 rounded-[3px] border border-white gap-[7px] text-center text-white text-sm font-medium cursor-pointer">
            Criar Conta
          </a>
          <a className="w-[115px] h-[41px] px-[25px] py-2.5 bg-sky-500 rounded-[3.15px] gap-[6px] inline-flex text-center text-white text-sm font-medium cursor-pointer">
            <Image
              src="/assets/login.svg"
              alt="detalhe menu"
              width={18}
              height={19}
            />
            Logar
          </a>
        </div>
        <Image
          src="/assets/menu.svg"
          alt="detalhe menu"
          width={28}
          height={19}
          className=" xl:hidden"
        />
      </div>
    </header>
  );
};
