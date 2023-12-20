'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Games {
  name: string;
  category: string;
  image?: string;
  logo: string;
}

export const Games = () => {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/blizzard/games')
      .then(async (response) => {
        const json = await response.json();
        setGames(json);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  return (
    <section className="bg-black w-full py-16 grid justify-center">
      <div className="md:w-[708px] xl:w-[1200px]">
        <div className="flex items-end justify-between mb-14 mx-6">
          <div className="text-neutral-400 text-[15px] font-semibold hidden xl:block mb-8">
            GAMES
          </div>
          <h1 className="text-white text-[28px] font-bold leading-[30.86px]">
            Jogos <br /> exclusivos
          </h1>
          <div className="hidden md:flex gap-6">
            <Image
              src="/assets/banner-hero/icons/icon-battlenet.svg"
              alt=""
              width={20}
              height={20}
            />
            <Image
              src="/assets/banner-hero/icons/icon-switch.svg"
              alt=""
              width={20}
              height={20}
            />
            <Image
              src="/assets/banner-hero/icons/icon-xbox.svg"
              alt=""
              width={20}
              height={20}
            />
            <Image
              src="/assets/banner-hero/icons/icon-ps.svg"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <div className="flex">
            <Image
              src="/assets/banner-hero/icons/icon-menu.svg"
              alt=""
              width={20}
              height={20}
            />
            <Link
              href="#"
              className="text-center text-sky-500 text-sm font-semibold"
            >
              Ver todos jogos
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center">
          {games.map((item, key) => (
            <div key={key}>
              <div className="w-[156px] h-[213.94px] bg-cover bg-center grid items-end rounded-md md:w-[210px] md:h-[285px] xl:w-[287px] xl:h-[393px] relative overflow-hidden justify-items-center">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="logo-game"
                    width={287}
                    height={393}
                    objectFit="cover"
                    quality={100}
                    loading="eager"
                    className="w-full h-full hover:scale-125 transform transition-all"
                  />
                )}
                {item.logo && (
                  <img
                    src={item.logo}
                    alt="Logo Game"
                    className="w-[82px] h-[54px] mb-6 xl:w-[148px] xl:h-[98px] absolute"
                  />
                )}
              </div>
              <div className="hidden md:block">
                <h1 className="text-neutral-200 text-base font-semibold mt-3">
                  {item.name}
                </h1>
                <p className="opacity-80 text-neutral-200 text-sm font-normal">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
          <div className="w-[158px] h-[217px] border border-neutral-800 rounded-sm flex flex-col gap-8 justify-center items-center md:w-[210px] md:h-[285px] xl:w-[287px] xl:h-[393px]">
            <Image
              src="/assets/logo-blizzard.png"
              alt="Logo Blizzard"
              width={69}
              height={32}
            />

            <div className="flex gap-1">
              <Image
                src="/assets/banner-hero/icons/icon-menu.svg"
                alt=""
                width={20}
                height={20}
                className="hidden md:block"
              />
              <Link
                href="#"
                className="text-center text-white text-sm font-semibold"
              >
                Ver todos jogos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
