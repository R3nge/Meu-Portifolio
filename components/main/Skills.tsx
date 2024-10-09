import {
  Backend_skill,
  College_logos,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
  SolloTech_logos,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import React from 'react';
import Formacao from "../sub/Formacao";
import FormaçãoText1 from "../sub/FormaçãoText1";
import FormaçãoText2 from "../sub/FormaçãoText2";
import Experiencias from "../sub/Experiencias";
import ExperienciaText1 from "../sub/ExperienciaText1";
import ExperienciaText2 from "../sub/ExperienciaText2";
import ExperienciaText3 from "../sub/ExperienciaText3";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-5 py-40"
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill_name={image.skill_name} // Adicionando a propriedade skill_name
            index={0} />
        ))}

      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill_name={image.skill_name} // Passa o nome da tecnologia
            index={0} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill_name={image.skill_name} // Passa o nome da tecnologia
            index={0} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill_name={image.skill_name} // Passa o nome da tecnologia
            index={0} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            skill_name={image.skill_name} // Passa o nome da tecnologia
            index={0} />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Formacao />

        {/* Bloco de Formação 1 */}
        <FormaçãoText1 />

        {/* Renderizando as logos de Formação 1 */}
        <div className="flex flex-row gap-5 items-center">
          {College_logos.map((logo, index) => (
            <SkillDataProvider
              key={index}
              src={logo.Image}
              width={logo.width}
              height={logo.height}
              skill_name={logo.skill_name} // Passa o nome da instituição
              index={0}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <FormaçãoText2 />

        {/* Renderizando as logos de Formação 2 */}
        <div className="flex flex-row gap-5 items-center">
          {College_logos.map((logo, index) => (
            <SkillDataProvider
              key={index}
              src={logo.Image}
              width={logo.width}
              height={logo.height}
              skill_name={logo.skill_name} // Passa o nome da instituição
              index={0}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Experiencias />

        <ExperienciaText1 />

        {/* Renderizando as logos de Experiências */}
        <div className="flex flex-row gap-5 items-center">
          {SolloTech_logos.map((logo, index) => (
            <SkillDataProvider
              key={index}
              src={logo.Image}
              width={logo.width}
              height={logo.height}
              skill_name={logo.skill_name} // Passa o nome da instituição
              index={0}
            />
          ))}
        </div>
        <ExperienciaText2 />
        <ExperienciaText3 />

      </div>
    </section>

  );
};

export default Skills;
