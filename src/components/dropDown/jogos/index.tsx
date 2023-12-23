import Image from "next/legacy/image";
import React from "react";

import { jogosOption } from "./jogosLinks";

type DropdownJogosProps = {
  showDropdown: boolean;
};

export const DropdownJogos: React.FC<DropdownJogosProps> = ({
  showDropdown
}) => {
  return (
    <div
      style={{ display: showDropdown ? "block" : "none", position: "relative" }}
    >
      <div className="absolute w-full z-20 bg-neutral-950 h-[640px] bg-opacity-90 top-0 backdrop-blur-sm flex items-center justify-center">
        <div className="grid justify-items-center grid-flow-col grid-cols-6 grid-rows-2 mx-28 mt-12 gap-6">
          {jogosOption.map((item, index) => {
            return (
              <div
                key={index}
                className="w-44 h-40 flex flex-col hover:bg-black rounded-lg items-center justify-center cursor-pointer transform transition-all hover:scale-125"
              >
                <div>
                  <Image
                    src={item.gameImage}
                    alt="gameIcon"
                    width={69}
                    height={69}
                    layout="fixed"
                    objectFit="cover"
                  />
                </div>
                <p className="w-[105px] text-center text-neutral-400 text-sm font-medium leading-[16px] mb-4">
                  {item.gameName}
                </p>
              </div>
            );
          })}
          <footer className="bg-zinc-900 bg-opacity-70 w-full h-[70px] absolute z-20 bottom-0 text-white text-base font-semibold flex items-center justify-center gap-16">
            <div className="flex gap-1">
              <Image
                src="/assets/banner-hero/icons/icon-menu.svg"
                alt="Menu Icon"
                width={30}
                height={20}
              />
              <p>Ver todos jogos</p>
            </div>

            <div className="flex gap-2">
              <Image
                src="/assets/banner-hero/icons/icon-battlenet.svg"
                alt="BattleNet Icon"
                width={20}
                height={20}
              />
              <p>Aplicativo Battle.net</p>
            </div>

            <div className="flex gap-2">
              <Image
                src="/assets/banner-hero/icons/icon-downloads.svg"
                alt="Download Icon"
                width={20}
                height={20}
              />
              <p>Downloads</p>
            </div>

            <div className="flex gap-2">
              <Image
                src="/assets/banner-hero/icons/icon-chat.svg"
                alt="Chat Icon"
                width={20}
                height={20}
              />
              <p>Fóruns dos jogos</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
