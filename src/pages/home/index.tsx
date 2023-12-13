'use client';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

import { ButtonComponents } from '../../components/button/index';

export const HomePage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="w-full  h-[658px] bg-cover grid bg-center md:h-[758px] md:grid-cols-3 md:items-center"
      style={{
        backgroundImage: "url('/assets/banner-hero/games/diablo-bg.png')"
      }}
    >
      <div className="ml-6 md:ml-12 col-span-2 xl:grid xl:grid-flow-col xl:grid-cols-2 xl:ml-0">
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
        <div className="w-80 grid grid-flow-col xl:grid-flow-row mt-14 xl:col-start-1 xl:ml-24">
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
        <div className="grid justify-center bg-cover bg-center w-72 h-40">
          <span className="text-right text-white text-[13px] font-semibold uppercase hidden md:block mb-3">
            Assista o trailer
          </span>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-cover bg-center cursor-pointer"
          >
            <Image
              src="/assets/Component 1.svg"
              alt="play"
              width={46}
              height={46}
              className="z-30 absolute ml-28 mt-14 hover:bg-blue-500 rounded-full"
            />
            <Image
              src={
                isHovered
                  ? '/assets/banner-hero/games/diablo-animation.gif'
                  : '/assets/banner-hero/games/diablo-animation-cover.png'
              }
              alt="preview gif"
              width={280}
              height={158}
              className="h-40 rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
