'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

type loginShow = {
  loginShow1: boolean;
  toggleLogin: () => void;
};

export const Login: React.FC<loginShow> = ({ loginShow1, toggleLogin }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        toggleLogin();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [toggleLogin]);

  return (
    <div
      style={{
        display: loginShow1 ? 'block' : 'none'
      }}
      className="w-full h-screen bg-black bg-opacity-70 z-50 fixed"
    >
      <div
        ref={modalRef}
        style={{
          backgroundImage: 'url(/assets/showLogin/loginShow.png)'
        }}
        className="w-[696px] h-[600px] bg-cover bg-center bg-no-repeat rounded left-[30%] top-[20%] absolute"
      >
        <div className="flex flex-col items-end">
          <Image
            src="/assets/showLogin/close.svg"
            alt="Fechar Modal"
            width={32}
            height={32}
            quality={100}
            className="mt-4 mr-4 cursor-pointer"
            onClick={toggleLogin}
          />
        </div>
        <div className="flex flex-col items-center mt-1">
          <Image
            src="/assets/logo-battle-net.png"
            alt="Logo Battle Net"
            width={166}
            height={20}
            quality={100}
            className="mt-4 mr-4"
          />
          <input
            type="text"
            placeholder="E-mail ou telefone"
            className="w-[426px] h-11 rounded mt-10 hover:placeholder-black hover:border-2 pl-4 focus:outline-none border-2 border-transparent focus:border-sky-500 hover:border-sky-500"
          />
          <input
            type="text"
            placeholder="Senha"
            className="w-[426px] h-11 rounded mt-3 hover:placeholder-black hover:border-2 pl-4 focus:outline-none border-2 border-transparent focus:border-sky-500 hover:border-sky-500"
          />
          <button className="btn px-8 py-3.5 w-[426px] h-[52px] mt-6">
            Conectar-se
          </button>
          <p className="mt-10 text-white text-sm font-medium">
            ou conecte-se com
          </p>
          <div className="flex">
            <Image
              src="/assets/showLogin/google.svg"
              alt="Logo Google"
              width={48}
              height={48}
              quality={100}
              className="mr-4 mt-4"
            />
            <Image
              src="/assets/showLogin/apple.svg"
              alt="Logo apple"
              width={48}
              height={48}
              quality={100}
              className="mr-4 mt-4"
            />
            <Image
              src="/assets/showLogin/facebook.svg"
              alt="Logo Facebook"
              width={48}
              height={48}
              quality={100}
              className="mt-4"
            />
          </div>
          <p className="text-white text-base font-medium mt-9">
            <span className="cursor-pointer underline text-sky-500 text-base font-medium">
              Crie uma conta
            </span>{' '}
            Battle.net de graça
          </p>
          <p className="cursor-pointer underline text-sky-500 text-base font-medium mt-4">
            Não consegue logar?
          </p>
        </div>
      </div>
    </div>
  );
};
