import Image from 'next/legacy/image';
import React, { useState } from 'react';

import { esporteLinks } from './esportesLinks';

type DropdownJogosProps = {
  showDropdown: boolean;
};

export const DropdownEsportes: React.FC<DropdownJogosProps> = ({
  showDropdown
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: showDropdown ? 'block' : 'none'
      }}
    >
      <div className="absolute w-full z-20 bg-neutral-950 h-[640px] bg-opacity-90 top-0 backdrop-blur-sm flex items-center justify-center">
        <div className="grid justify-items-center grid-flow-col mx-28 mt-12 gap-6">
          {esporteLinks.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[174px] h-[237px] pb-[31px] 
                gap-[23px] flex flex-col items-center justify-center cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`transform transition-all ${
                    hoveredIndex === index ? 'scale-125' : 'scale-100'
                  }`}
                >
                  <Image
                    src={item.leagueImage}
                    alt="gameIcon"
                    width={174}
                    height={149}
                    layout="fixed"
                    objectFit="cover"
                  />
                </div>
                <p className="w-[105px] text-center text-neutral-400 text-sm font-medium leading-[16px]">
                  {item.leagueName}
                </p>
              </div>
            );
          })}
          <footer className="bg-zinc-900 bg-opacity-70 w-full h-[70px] absolute z-20 bottom-0 text-white text-base font-semibold flex items-center justify-center gap-16">
            <div className="flex gap-3">
              <Image
                src="/assets/banner-hero/icons/icon-trophy.svg"
                alt="Trofeu Icon"
                width={25}
                height={15}
              />
              <p>Torneios da comunidade</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
