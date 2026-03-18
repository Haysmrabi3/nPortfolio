import React from 'react'

import Bootstrap from "../../assets/Skills/icons8-bootstrap.svg";
import Git from "../../assets/Skills/git.svg";
import HTML from "../../assets/Skills/html5.a7362949.svg";
import JS from "../../assets/Skills/javascript.455da02c.svg";
import JQ from "../../assets/Skills/jquery.svg";
import Next from "../../assets/Skills/next-js-logo-8FCFF51DD2-seeklogo.com.png";
import ReactLogo from "../../assets/Skills/react.svg";
import Tailwind from "../../assets/Skills/icons8-tailwindcss.svg";
 import  CSS  from '../../assets/Skills/icons8-css.svg';











export default function Skills() {



  const skillsData = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSS },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Tailwind", image: Tailwind },
    { name: "JavaScript", image: JS },
    { name: "jQuery", image: JQ },
    { name: "React", image: ReactLogo },
    { name: "Next", image: Next },
    { name: "Git", image: Git },
  ];




  return <>
  
  <section id="Skills" className="frist-color min-h-screen py-20 scroll-m-30">
  <div className="container mx-auto">
    <h2 className="text-center font-bold text-4xl md:text-5xl text-white">
      Technical Skills
    </h2>
    <p className="text-center font-semibold mt-1 text-sm text-gray-400">
      Technologies and frameworks I work with
    </p>

    <div className="grid grid-cols-12 gap-10 mt-10 mx-4 md:mx-10 lg:mx-72">
      {skillsData.map((item, index) => (
        <div
          key={index}
          className="col-span-6 md:col-span-3 flex flex-col items-center"
        >
          <div className="h-20 w-20">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-contain"
            />
          </div>
          <h5 className="text-center text-white font-semibold mt-2">
            {item.name}
          </h5>
        </div>
      ))}
    </div>
  </div>
</section>

  
  
  </>
}
