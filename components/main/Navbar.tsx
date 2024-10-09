import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Rodrigo Gomes
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#hero" className="cursor-pointer">Home</a>
            <a href="#skills" className="cursor-pointer">Stack</a>
            <a href="#encryption" className="cursor-pointer">Sobre mim</a>
            <a href="#projects" className="cursor-pointer">Projetos</a>
          </div>
        </div>

        {/* Redes Sociais Alinhadas Horizontalmente */}
        <div className="flex flex-row items-center space-x-4">
          {Socials.map((social, index) => (
            <a
              key={index}
              href={
                social.name === "Whatsapp"
                  ? "https://wa.me/32987025367"
                  : social.name === "Outlook"
                    ? "mailto:digo.rodrigomalaquias@hotmail.com?subject=Contato%20via%20Portfolio&body=Olá,%20quero%20saber%20mais%20sobre..." // Link para o email
                    : social.name === "Instagram"
                      ? `https://www.${social.name.toLowerCase()}.com/thesamedigo`
                      : social.name === "Linkedin"
                        ? `https://www.linkedin.com/in/digaogomes/`
                        : "#" // Adicione um link padrão ou uma URL de fallback
              }
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center cursor-pointer"
            >
              <img
                src={social.src}
                alt={social.name}
                className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-2" // Efeito de scale e rotação
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
