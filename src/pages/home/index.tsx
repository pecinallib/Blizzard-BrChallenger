import Image from 'next/image';
import React from 'react';

import { ButtonComponents } from '../../components/button/index';

export const HomePage: React.FC = () => {
  return (
    <section>
      <div className="w-full url h-[658px] bg-cover flex bg-center flex-col justify-between">
        <div className="flex flex-col ml-6 self-baseline mt-32 gap-5">
          <h1 className="w-[283px] text-white text-[40px] font-bold leading-[44px] md:w-[562px] md:text-[64px] md:leading-[70px]">
            Retorne à escuridão com o game Diablo IV
          </h1>
          <p className="w-[283px] md:w-[550px] text-white text-lg font-normal">
            O retorno de Lilith traz uma era de escuridão e sofrimento
          </p>
        </div>
        <div className="ml-6">
          <ButtonComponents text="Jogue Agora" type="button" />
        </div>
        <div className="ml-6 flex mb-14 gap-4">
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
    </section>
  );
};
