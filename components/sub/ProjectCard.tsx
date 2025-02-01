"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface Props {
  src: string; // Imagem principal
  hoverImages?: string[]; // Lista de imagens adicionais para o carrossel
  title: string;
  description: string;
}

const ProjectCard = ({ src, hoverImages = [], title, description }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (hovered && hoverImages.length > 0) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hoverImages.length);
      }, 1500); // Alterna as imagens a cada 1.5 segundos
    } else {
      setCurrentImageIndex(0); // Reseta ao sair do hover
    }
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [hovered, hoverImages.length]);

  const imageToShow = hovered && hoverImages.length > 0 ? hoverImages[currentImageIndex] : src;

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageToShow}
        alt={title}
        layout="responsive"
        width={500}
        height={500}
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
