import Image from 'next/image';
import React from 'react';

import { ButtonComponents } from '../../components/button/index';

export const HomePage: React.FC = () => {
  return (
    <section className="w-full url h-[658px] bg-cover grid bg-center md:h-[758px] md:grid-cols-3 md:items-center">
      <div className="ml-6 md:ml-12 col-span-2 xl:grid xl:grid-flow-col xl:grid-cols-2">
        <div className="xl:-ml-36">
          <div className="mt-32 md:mt-12 w-[283px] md:w-[562px]">
            <h1 className="text-white text-[40px] font-bold leading-[44px] md:text-[64px] md:leading-[70px] md:whitespace-nowrap">
              Retorne à <br /> escuridão com o{' '}
              <br className="hidden md:block" />
              game Diablo IV
            </h1>
            <p className="text-white text-lg font-normal mt-2">
              O retorno de Lilith traz uma era de escuridão e sofrimento
            </p>
          </div>
          <div className="mt-8">
            <ButtonComponents text="Jogue Agora" type="button" />
          </div>
        </div>
        <div className="w-80 grid grid-flow-col xl:grid-flow-row mt-14 xl:col-start-1 xl:ml-28">
          <Image
            src="/assets/banner-hero/icons/game-1.png"
            alt="logo"
            width={48}
            height={48}
          />
          <Image
            src="/assets/banner-hero/icons/game-2.png"
            alt="logo"
            width={48}
            height={48}
          />
          <Image
            src="/assets/banner-hero/icons/game-3.png"
            alt="logo"
            width={48}
            height={48}
          />
          <Image
            src="/assets/banner-hero/icons/game-4.png"
            alt="logo"
            width={48}
            height={48}
          />
          <Image
            src="/assets/banner-hero/icons/game-5.png"
            alt="logo"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div className="hidden md:grid gap-60 xl:gap-32 mr-12 mt-9 justify-center">
        <Image
          src="/assets/banner-hero/games/diablo-logo.png"
          alt="logo"
          width={280}
          height={154}
        />
        <div className="grid justify-center">
          <span className="text-right text-white text-[13px] font-semibold uppercase hidden md:block mb-4">
            Assista o trailer
          </span>
          <Image
            src="/assets/banner-hero/games/diablo-animation-cover.png"
            alt="logo"
            width={280}
            height={158}
          />
        </div>
      </div>
    </section>
  );
};
