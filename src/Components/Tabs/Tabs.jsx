import React, { useState } from "react";

// images
import Ecommerce from "../../assets/Projects/E-commerce/Home.png";
import Yummy from "../../assets/Projects/Yummy/Home.png";
import GamesApp from "../../assets/Projects/GameApp/gamePic.png";
import Fokir from "../../assets/Projects/Fokir/fokir.png";
import sMovies from "../../assets/Projects/sMovies/Screenshot 2026-03-21 151432.jpg";
import Mealfy from "../../assets/Projects/Mealfy/Mealfy.png";
import Weather from "../../assets/Projects/Weather/Weather.png";
import HotelApp from "../../assets/Projects/Hotel-App/hotelApp.jpg";
import Englsih from "../../assets/Projects/English-track/Screenshot 2025-02-10 103042.png";
import Fabrica from "../../assets/Projects/Fabrica/Fabrica.jpg";
import Solar from "../../assets/Projects/Solar/Solar.jpg";
import DashBoard from "../../assets/Projects/DashBoard/Dasgboard.jpg";
import Elearning from "../../assets/Projects/E-learning/Screenshot 2026-04-09 113853.jpg";

// skills icons
import Bootstrap from "../../assets/Skills/icons8-bootstrap.svg";
import HTML from "../../assets/Skills/html5.a7362949.svg";
import CSS from "../../assets/Skills/icons8-css.svg";
import Js from "../../assets/Skills/javascript.455da02c.svg";
import NextJs from "../../assets/Skills/next-js.svg";
import Tailwind from "../../assets/Skills/tailwind-css.svg";
import ReactLogo from "../../assets/Skills/react.svg";

const projects = [
  {
    name: "Online Shop",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Ecommerce,
    demo: "https://haysmrabi3.github.io/Fresh-cart/",
    github: "https://github.com/Haysmrabi3/Fresh-Cart",
  },
  {
    name: "DashBoard",
    skills: [HTML, CSS, Js, Tailwind, ReactLogo],
    img: DashBoard,
    demo: "https://haysmrabi3.github.io/DashBoard/",
    github: "https://github.com/Haysmrabi3/DashBoard",
  },
  {
    name: "E-learning",
    skills: [HTML, CSS, Js, Tailwind, NextJs],
    img: Elearning,
    demo: "https://elearning-alpha-nine.vercel.app/",
    github: "https://github.com/Haysmrabi3/E-Learning",
  },
  {
    name: "Food Recipes",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Yummy,
    demo: "https://haysmrabi3.github.io/Yummy/",
    github: "https://github.com/Haysmrabi3/Yummy",
  },
  {
    name: "Games App",
    skills: [HTML, CSS, Js, Tailwind, ReactLogo],
    img: GamesApp,
    demo: "https://haysmrabi3.github.io/GamesApp/",
    github: "https://github.com/Haysmrabi3/GamesApp",
  },
  {
    name: "English Track",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Englsih,
    demo: "https://haysmrabi3.github.io/English-track/",
    github: "https://github.com/Haysmrabi3/English-track",
  },
  {
    name: "Hotel App",
    skills: [HTML, CSS, Js, Tailwind, NextJs],
    img: HotelApp,
    demo: "https://hotelapp-sable.vercel.app/",
    github: "https://github.com/Haysmrabi3/Hotel-App",
  },
  {
    name: "Weather App",
    skills: [HTML, CSS, Js],
    img: Weather,
    demo: "https://haysmrabi3.github.io/Weather-App/",
    github: "https://github.com/Haysmrabi3/Weather-App",
  },
  {
    name: "sMovies App",
    skills: [HTML, CSS, Js],
    img: sMovies,
    demo: "https://haysmrabi3.github.io/sMovies-App/",
    github: "https://github.com/Haysmrabi3/sMovies-App",
  },
  {
    name: "Mealfy",
    skills: [HTML, CSS],
    img: Mealfy,
    demo: "https://haysmrabi3.github.io/Mealfy/",
    github: "https://github.com/Haysmrabi3/Mealfy",
  },
  {
    name: "Fokir",
    skills: [HTML, CSS],
    img: Fokir,
    demo: "https://haysmrabi3.github.io/Fokir/",
    github: "https://github.com/Haysmrabi3/Fokir",
  },
];

const NextProjects = [
  {
    name: "Hotel App",
    skills: [HTML, CSS, Js, Tailwind, NextJs],
    img: HotelApp,
    demo: "https://hotelapp-sable.vercel.app/",
    github: "https://github.com/Haysmrabi3/Hotel-App",
  },{
    name: "E-learning",
    skills: [HTML, CSS, Js, Tailwind, NextJs],
    img: Elearning,
    demo: "https://elearning-alpha-nine.vercel.app/",
    github: "https://github.com/Haysmrabi3/E-Learning",
  },
];

const reactProjects = [
  {
    name: "Online Shop",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Ecommerce,
    demo: "https://haysmrabi3.github.io/Fresh-cart/",
    github: "https://github.com/Haysmrabi3/Fresh-Cart",
  },
  {
    name: "DashBoard",
    skills: [HTML, CSS, Js, Tailwind, ReactLogo],
    img: DashBoard,
    demo: "https://haysmrabi3.github.io/DashBoard/",
    github: "https://github.com/Haysmrabi3/DashBoard",
  } ,
  {
    name: "Food Recipes",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Yummy,
    demo: "https://haysmrabi3.github.io/Yummy/",
    github: "https://github.com/Haysmrabi3/Yummy",
  },
  {
    name: "Games App",
    skills: [HTML, CSS, Js, Tailwind, ReactLogo],
    img: GamesApp,
    demo: "https://haysmrabi3.github.io/GamesApp/",
    github: "https://github.com/Haysmrabi3/GamesApp",
  },
  {
    name: "English Track",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Englsih,
    demo: "https://haysmrabi3.github.io/English-track/",
    github: "https://github.com/Haysmrabi3/English-track",
  },
];

const BaseProjects = [
  {
    name: "Weather App",
    skills: [HTML, CSS, Js],
    img: Weather,
    demo: "https://haysmrabi3.github.io/Weather-App/",
    github: "https://github.com/Haysmrabi3/Weather-App",
  },
  {
    name: "sMovies App",
    skills: [HTML, CSS, Js],
    img: sMovies,
    demo: "https://haysmrabi3.github.io/sMovies-App/",
    github: "https://github.com/Haysmrabi3/sMovies-App",
  },
  {
    name: "Mealfy",
    skills: [HTML, CSS],
    img: Mealfy,
    demo: "https://haysmrabi3.github.io/Mealfy/",
    github: "https://github.com/Haysmrabi3/Mealfy",
  },
  {
    name: "Fokir",
    skills: [HTML, CSS],
    img: Fokir,
    demo: "https://haysmrabi3.github.io/Fokir/",
    github: "https://github.com/Haysmrabi3/Fokir",
  },
  {
    name: "Solar",
    skills: [HTML, CSS],
    img: Solar,
    demo: "https://haysmrabi3.github.io/Solar-App/",
    github: "https://github.com/Haysmrabi3/Solar-App",
  },
];

const FreeProjects = [
  {
    name: "Fabrica",
    skills: [HTML, CSS, Js, ReactLogo],
    img: Fabrica,
    demo: "https://fabrica-teal.vercel.app/#/#home",
    github: "",
  },
];

export default function Tabs() {
  const [active, setActive] = useState("All");

  const renderCards = (list) => (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((project, index) => (
        <div
          key={index}
          className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          {/* Image */}
          <div className="h-[200px] overflow-hidden">
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{project.name}</h3>

              <div className="flex gap-3 text-xl">
                {/* Demo */}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-solid fa-eye"></i>
                  </a>
                ) : null}

                {/* GitHub */}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                ) : null}
              </div>
            </div>

            {/* Skills */}
            {project.skills && project.skills.length > 0 ? (
              <div className="flex flex-wrap gap-2 mt-4">
                {project.skills.map((skill, i) => (
                  <img
                    key={i}
                    src={skill}
                    alt="skill"
                    className="w-8 h-8"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-4 text-white">
      {/* Tabs */}
      <div className="flex justify-center gap-6 border-b border-gray-700 pb-2">
        <button
          onClick={() => setActive("All")}
          className={`pb-2 transition ${
            active === "All"
              ? "border-b-2 border-white cursor-pointer "
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          All-Projects
        </button>

        <button
          onClick={() => setActive("React")}
          className={`pb-2 transition ${
            active === "React"
              ? "border-b-2 border-white cursor-pointer "
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          React-js
        </button>

        <button
          onClick={() => setActive("Next")}
          className={`pb-2 transition ${
            active === "Next"
              ? "border-b-2 border-white cursor-pointer "
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          Next-js
        </button>

        <button
          onClick={() => setActive("Base")}
          className={`pb-2 transition ${
            active === "Base"
              ? "border-b-2 border-white cursor-pointer "
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          Html & css & js
        </button>

        <button
          onClick={() => setActive("Free")}
          className={`pb-2 transition ${
            active === "Free"
              ? "border-b-2 border-white cursor-pointer "
              : "text-gray-400 hover:text-white cursor-pointer"
          }`}
        >
          FreeLance
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {active === "All" && renderCards(projects)}
        {active === "React" && renderCards(reactProjects)}
        {active === "Next" && renderCards(NextProjects)}
        {active === "Base" && renderCards(BaseProjects)}
        {active === "Free" && renderCards(FreeProjects)}
      </div>
    </div>
  );
}

