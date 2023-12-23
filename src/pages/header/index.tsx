'use client';
import Image from 'next/legacy/image';
import { useState } from 'react';

import { DropdownEsportes } from 'components/dropDown/esportes';
import { DropdownJogos } from 'components/dropDown/jogos';
import { Login } from 'components/login';

const Header: React.FC = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
    setShowDropdown2(false);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
    setShowDropdown1(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <header className="w-full md:w-full h-20 md:h-24 bg-transparent flex items-center justify-between absolute border-b-2 border-opacity-10 border-white z-30">
        <div className="ml-6 md:ml-11 grid xl:ml-28 gap-6 mt-6 md:gap-8 md:mt-8 justify-items-start">
          <Image
            src="/assets/logo-blizzard.png"
            alt="logo"
            width={69}
            height={32}
          />
          <Image
            src="/assets/Vector 7.svg"
            alt="detalhe-logo"
            width={43}
            height={2}
            className="mt-5"
          />
        </div>
        <>
          <ul className="hidden xl:flex gap-8 text-center text-white text-sm font-medium ">
            <li className="flex gap-1 cursor-pointer" onClick={toggleDropdown1}>
              Jogos
              <Image
                src="/assets/Vector 5.svg"
                alt="Seta"
                width={10}
                height={5}
                style={{
                  transform: `rotate(${showDropdown1 ? 180 : 0}deg)`
                }}
                className={showDropdown1 ? 'blue-arrow' : ''}
              />
            </li>
            <li className="flex gap-1 cursor-pointer" onClick={toggleDropdown2}>
              Esportes
              <Image
                src="/assets/Vector 5.svg"
                alt="Seta"
                width={10}
                height={5}
                style={{
                  transform: `rotate(${showDropdown2 ? 180 : 0}deg)`
                }}
                className={showDropdown2 ? 'blue-arrow' : ''}
              />
            </li>
            <li>Loja</li>
            <li>Noticias</li>
            <li>Suporte</li>
          </ul>
        </>
        <div className="mr-6 flex xl:mr-28 items-center">
          <div className="hidden md:flex mr-20 gap-4">
            <a className="w-32 h-[41px] px-4 py-2.5 rounded-[3px] border border-white gap-[7px] text-center text-white text-sm font-medium cursor-pointer hover:text-black hover:bg-white duration-500 ">
              Criar Conta
            </a>
            <a
              className="px-[25px] py-2.5 btn gap-[6px] inline-flex text-sm font-medium cursor-pointer"
              onClick={toggleLogin}
            >
              <Image
                src="/assets/login.svg"
                alt="detalhe menu"
                width={18}
                height={19}
              />
              Logar
            </a>
          </div>
          <div className="xl:hidden">
            <Image
              src="/assets/menu.svg"
              alt="detalhe menu"
              width={28}
              height={19}
            />
          </div>
        </div>
      </header>
      {<DropdownJogos showDropdown={showDropdown1} />}
      {<DropdownEsportes showDropdown={showDropdown2} />}
      {showLogin && (
        <Login
          loginShow1={showLogin}
          toggleLogin={() => setShowLogin(!showLogin)}
        />
      )}
    </div>
  );
};

export default Header;
