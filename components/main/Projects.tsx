import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus Projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-5">

        <ProjectCard
          src="/portifolioantigo.jpeg"
          title="Portifólio (Antigo)"
          description="Meu antigo portifólio feito em Angular e Typescript para testar meus conhecimentos após concluir o Bootcamp Angular (Powered By IFood) da Plataforma DIO."
        />
        <ProjectCard
          src="/vistofront.jpeg"
          title="Visto App (Front-End)"
          description="Front-End de um Aplicativo de Vistorias construido em React-Native utilizando algumas técnologias como Async Storage, Redux e Axios."
        />
        <ProjectCard
          src="/jsonExample.png"
          title="Visto App (Back-End)"
          description="API que corresponde ao aplicativo de Vistorias feita em NodeJs utilizando o Banco de Dados PostgreSQL onde ambos os ambientes estão hospedados em nuvem."
        />
        <ProjectCard
          src="/ExemploPDF.jpeg"
          title="Exportação de Documentos (Back-End)"
          description="API de exportação de documentos em PDF ou DOCX onde cada documento tem seu modelo pré definido."
        />

      </div>
    </div>
  );
};

export default Projects;
