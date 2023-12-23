'use client';
import Image from 'next/legacy/image';
import { useState } from 'react';

interface Game {
  id: number;
  imagem: string;
  fundo: string;
  logo: string;
  texto: string;
  descricao: string;
  gifCover: string;
  gif: string;
}

const dataGames: Game[] = [
  {
    id: 1,
    imagem: '/assets/banner-hero/icons/game-1.png',
    fundo: '/assets/banner-hero/games/diablo-bg.png',
    logo: '/assets/banner-hero/games/diablo-logo.png',
    texto: 'Retorne à escuridão com o jogo Diablo IV',
    descricao: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    gifCover: '/assets/banner-hero/games/diablo-animation-cover.png',
    gif: '/assets/banner-hero/games/diablo-animation.gif'
  },
  {
    id: 2,
    imagem: '/assets/banner-hero/icons/game-2.png',
    fundo: '/assets/banner-hero/games/hearthstone-bg.png',
    logo: '/assets/banner-hero/games/hearthstone-logo.png',
    texto: 'Novo pacote de expansão Hearthstone',
    descricao: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    gifCover: '/assets/banner-hero/games/hearthstone-animation-cover.png',
    gif: '/assets/banner-hero/games/hearthstone-animation.gif'
  },
  {
    id: 3,
    imagem: '/assets/banner-hero/icons/game-3.png',
    fundo: '/assets/banner-hero/games/wow-bg.png',
    logo: '/assets/banner-hero/games/wow-logo.png',
    texto: 'Desbrave as Terras Sombrias em Shadowlands!',
    descricao: 'O que jaz além do mundo que você conhece?',
    gifCover: '/assets/banner-hero/games/wow-animation-cover.png',
    gif: '/assets/banner-hero/games/wow-animation.gif'
  },
  {
    id: 4,
    imagem: '/assets/banner-hero/icons/game-4.png',
    fundo: '/assets/banner-hero/games/diablo-bg.png',
    logo: '/assets/banner-hero/games/diablo-logo.png',
    texto: 'Retorne à escuridão com o jogo Diablo IV',
    descricao: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    gifCover: '/assets/banner-hero/games/diablo-animation-cover.png',
    gif: '/assets/banner-hero/games/diablo-animation.gif'
  },
  {
    id: 5,
    imagem: '/assets/banner-hero/icons/game-5.png',
    fundo: '/assets/banner-hero/games/diablo-bg.png',
    logo: '/assets/banner-hero/games/diablo-logo.png',
    texto: 'Retorne à escuridão com o jogo Diablo IV',
    descricao: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    gifCover: '/assets/banner-hero/games/diablo-animation-cover.png',
    gif: '/assets/banner-hero/games/diablo-animation.gif'
  }
];

const HomePage: React.FC = () => {
  const [gameSelected, setGameSelected] = useState(dataGames[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleCliqueJogo = (jogo: Game) => {
    setGameSelected(jogo);
  };

  return (
    <section
      className={`w-full h-[658px] bg-cover grid bg-center md:h-[758px] md:grid-cols-3 md:items-center transition-all duration-500 ease-in-out relative`}
      style={{
        backgroundImage: `url(${gameSelected.fundo})`
      }}
    >
      <div className="ml-6 md:ml-12 col-span-2 xl:grid xl:grid-flow-col xl:grid-cols-2 xl:ml-0">
        <div className="xl:-ml-36">
          <div className="mt-32 md:mt-12 w-[283px] md:w-[562px]">
            <h1 className="w-[283px] text-white text-[40px] font-bold leading-[44px] md:w-[562px] md:text-[64px] md:leading-[70px] ">
              {gameSelected.texto}
            </h1>
            <p className="text-white text-lg font-normal mt-2">
              {gameSelected.descricao}
            </p>
          </div>
          {gameSelected.id === 1 ? (
            <button className="btn mt-8 px-8 py-3.5 font-semibold">
              Jogue Agora
            </button>
          ) : (
            <button className="btn mt-8 px-8 py-3.5 font-semibold">
              Reserve agora na Pré-Venda
            </button>
          )}
        </div>
        <div className="flex gap-5 mt-12 xl:flex-col xl:col-start-1 xl:w-12 xl:justify-center xl:ml-28">
          {dataGames.map((jogo) => (
            <Image
              key={jogo.id}
              src={jogo.imagem}
              alt={`logo-${jogo.id}`}
              width={48}
              height={48}
              className={`cursor-pointer ${
                jogo !== gameSelected ? 'grayscale' : ''
              }`}
              onClick={() => handleCliqueJogo(jogo)}
            />
          ))}
        </div>
      </div>
      <div className="hidden md:grid gap-60 xl:gap-32 mr-24 mt-9 justify-center">
        <Image src={gameSelected.logo} alt="logo" width={280} height={154} />
        <div className="grid justify-center bg-cover bg-center w-72 h-40">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
          >
            <span className="text-right text-white text-[13px] font-semibold uppercase hidden md:block mb-3">
              Assista o trailer
            </span>
            <div className="relative">
              <Image
                src={isHovered ? gameSelected.gif : gameSelected.gifCover}
                alt="preview gif"
                width={280}
                height={158}
                className="h-40 rounded"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/play.svg"
                  alt="play"
                  width={46}
                  height={46}
                  className={
                    isHovered ? 'bg-blue-500 brightness-200 rounded-full' : ''
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr
        className="border-b-2 absolute border-sky-500 bottom-0 transform transition-all duration-500"
        style={{
          width:
            gameSelected.id === 1
              ? '30%'
              : gameSelected.id === 2
                ? '50%'
                : gameSelected.id === 3
                  ? '70%'
                  : '100%'
        }}
      />
    </section>
  );
};

export default HomePage;
