"use client";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";

interface TypeGames {
  name: string;
  category: string;
  image?: string;
  logo: string;
}

const Games = () => {
  const [games, setGames] = useState<TypeGames[]>([]);
  const [shadow, setShadow] = useState<number | null>(null);

  const hoverShadow = (e: number) => {
    setShadow(e);
  };

  const shadowLeave = () => {
    setShadow(null);
  };

  useEffect(() => {
    fetch("https://api.brchallenges.com/api/blizzard/games")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Resposta de rede não foi bem-sucedida");
        }
        const json = await response.json();
        setGames(json);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
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
            <a
              href="#"
              className="text-center text-sky-500 text-sm font-semibold"
            >
              Ver todos jogos
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-6 justify-center">
          {games.map((item, key) => (
            <div key={key} className="relative">
              <div className="w-[156px] h-[213px] grid items-end rounded-md md:w-[210px] md:h-[285px] xl:w-[287px] xl:h-[393px] relative overflow-hidden justify-items-center">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Game Image"
                    width={287}
                    height={393}
                    quality={100}
                    loading="eager"
                    className={`relative duration-500 ${
                      shadow === key ? "scale-125" : ""
                    }`}
                  />
                )}
                {item.logo && (
                  <div className="absolute mb-4 w-[82px] h-[54px] md:w-[107px] md:h-[71px] xl:w-[148px] xl:h-[98px]">
                    <Image
                      src={item.logo}
                      alt="Logo Game"
                      width={148}
                      height={98}
                      quality={100}
                    />
                  </div>
                )}

                <div
                  onMouseOver={() => hoverShadow(key)}
                  onMouseLeave={shadowLeave}
                  className="hover:bg-gradient-to-b h-full from-transparent to-black w-full xl:h-[393px] md:h-[285px] absolute opacity-70"
                ></div>
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
              <a
                href="#"
                className="text-center text-white text-sm font-semibold"
              >
                Ver todos jogos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
