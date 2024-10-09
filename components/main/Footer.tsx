import React from "react";
import { Socials } from "../../constants"; // Ajuste o caminho conforme necessário

const Footer = () => {
    return (
        <div className="w-full shadow-lg shadow-[#2A0E61]/50 bg-[#99999999] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-col items-center justify-between m-auto px-[10px] py-4">
                <div className="text-[15px] text-center">
                    &copy; Rodrigo Gomes Dev 2024 Inc. Todos os direitos reservados
                </div>
            </div>
        </div>
    );
};

export default Footer;
