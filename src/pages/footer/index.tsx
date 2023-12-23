'use client';
import Image from 'next/legacy/image';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [system, setSystem] = useState('');

  useEffect(() => {
    const systemNew = window.navigator.platform;
    setSystem(systemNew);
  }, []);

  return (
    <footer
      className="w-full bg-cover bg-center pt-16 md:flex"
      style={{
        backgroundImage: `url(/assets/footer-background.png)`
      }}
    >
      <div className="ml-6 xl:ml-28">
        <Image
          src="/assets/logo-battle-net.png"
          alt="logo"
          width={133}
          height={16}
          quality={100}
        />
        <h1 className="w-[277px] text-white text-[28px] font-bold leading-[30.86px] my-7">
          Baixe agora o battle.net
        </h1>
        <div className="text-neutral-300 text-lg font-normal leading-loose w-[312px]">
          <div className="flex gap-4 mb-6">
            <Image
              src="/assets/banner-hero/icons/icon-screen.svg"
              alt="detalhe"
              width={18}
              height={18}
              quality={100}
            />
            <p>Seus jogos em um só lugar</p>
          </div>
          <div className="flex gap-4 mb-6">
            <Image
              src="/assets/banner-hero/icons/icon-connect.svg"
              alt="detalhe"
              width={18}
              height={18}
              quality={100}
            />
            <p>Conecte-se aos seus amigos</p>
          </div>
          <div className="flex gap-4 mb-10">
            <Image
              src="/assets/banner-hero/icons/icon-buy.svg"
              alt="detalhe"
              width={18}
              height={18}
              quality={100}
            />
            <p>Compre jogos e itens digitais</p>
          </div>
        </div>
        {system.includes('Win') ? (
          <button className="btn mb-10 py-3 px-8 gap-2 font-semibold">
            <Image
              src="/assets/banner-hero/icons/icon-windows.svg"
              alt="Logo Windows"
              width={24}
              height={24}
              className="w-auto"
            />
            Baixar para o Windows
          </button>
        ) : system.includes('Mac') ? (
          <button className="btn mb-10 py-3 px-8 gap-2 font-semibold">
            <Image
              src="/assets/banner-hero/icons/icon-apple.svg"
              alt="Logo MacOS"
              width={24}
              height={24}
              className="w-auto"
            />
            Baixar para o MacOS
          </button>
        ) : (
          <button className="btn mb-10 py-3 px-8 gap-2 font-semibold">
            <Image
              src="/assets/banner-hero/icons/icon-çinux.svg"
              alt="Logo Linux"
              width={24}
              height={24}
              className="w-auto"
            />
            Baixar para o Linux
          </button>
        )}
        <div className="w-[239px] flex gap-4 pb-6">
          <Image
            src="/assets/banner-hero/icons/icon-smarthphone.svg"
            alt="detalhe"
            width={18}
            height={20}
            quality={100}
          />
          <p className="text-neutral-200 text-sm font-semibold">
            Também disponível como{' '}
            <span className="underline">aplicativo móvel</span>
          </p>
        </div>
      </div>
      <div
        className="w-[528px] h-[350px] bg-cover relative overflow-hidden md:w-[900px] md:h-[506px] xl:w-[1053px] xl:h-[593px] xl:ml-48  xl:mb-32"
        style={{
          backgroundImage: `url(/assets/ilustrations/app.png)`
        }}
      >
        <div className="absolute -bottom-3 -right-16 md:-right-36 2xl:right-24 2xl:-bottom-[77px] w-[320px] h-[220px] md:w-[466px] md:h-[285px] xl:w-[562px] xl:h-[343px]">
          <Image
            src="/assets/ilustrations/app-mini.png"
            alt="app-mini"
            layout="fill"
            width={562}
            height={343}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
