import React from 'react'
import Ecommerce from '../../assets/Projects/E-commerce/Home.png'
import Yummy from '../../assets/Projects/Yummy/Home.png'
import GamesApp from '../../assets/Projects/GameApp/gamePic.png'
import Fokir from '../../assets/Projects/Fokir/fokir.png'
import sMovies from '../../assets/Projects/sMovies/Screenshot 2026-03-21 151432.jpg'
import Mealfy from '../../assets/Projects/Mealfy/Mealfy.png'
import Weather from '../../assets/Projects/Weather/Weather.png'
import Englsih from '../../assets/Projects/English-track/Screenshot 2025-02-10 103042.png'
import Bootstrap from "../../assets/Skills/icons8-bootstrap.svg";
import HTML from "../../assets/Skills/html5.a7362949.svg";
import CSS from '../../assets/Skills/icons8-css.svg';
import Js from '../../assets/Skills/javascript.455da02c.svg';
import Tailwind from '../../assets/Skills/tailwind-css.svg';
import ReactLogo from "../../assets/Skills/react.svg";













export default function Projects() {

const projects = [
  {
    name: "Online Shop",
    skills: [HTML, CSS,Js, Bootstrap,ReactLogo],
    img: Ecommerce,
    demo: "https://haysmrabi3.github.io/Fresh-cart/",
    github: "https://github.com/Haysmrabi3/Fresh-Cart"
  },
  {
    name: "Food Recipes",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Yummy,
    demo: "https://haysmrabi3.github.io/Yummy/",
    github: "https://github.com/Haysmrabi3/Yummy"
  },
  {
    name: "Games App",
    skills: [HTML, CSS, Js, Tailwind, ReactLogo],
    img: GamesApp,
    demo: "https://haysmrabi3.github.io/GamesApp/",
    github: "https://github.com/Haysmrabi3/GamesApp"
  },
  {
    name: "English Track",
    skills: [HTML, CSS, Js, Bootstrap, ReactLogo],
    img: Englsih,
    demo: "https://haysmrabi3.github.io/English-track/",
    github: "https://github.com/Haysmrabi3/English-track"
  },
  {
    name: "Weather App",
    skills: [HTML, CSS, Js],
    img: Weather,
    demo: "https://haysmrabi3.github.io/Weather-App/",
    github: "https://github.com/Haysmrabi3/Weather-App"
  },
    {
    name: "sMovies App",
    skills: [HTML, CSS , Js],
    img: sMovies,
    demo: "https://haysmrabi3.github.io/sMovies-App/",
    github: "https://github.com/Haysmrabi3/sMovies-App"
  } ,
  {
    name: "Mealfy",
    skills: [HTML, CSS],
    img: Mealfy,
    demo: "https://haysmrabi3.github.io/Mealfy/",
    github: "https://github.com/Haysmrabi3/Mealfy"
  },
  {
    name: "Fokir",
    skills: [HTML, CSS],
    img: Fokir,
    demo: "https://haysmrabi3.github.io/Fokir/",
    github: "https://github.com/Haysmrabi3/Fokir"
  }
];









    return <>


        <section id='Project' className='scroll-m-30'>
            <div className="container mx-auto ">
                <h2 className='text-center font-bold text-4xl md:text-5xl text-white'>Projects</h2>
                <p className='text-center font-semibold mt-1 text-sm text-gray-400'>A collection of projects that showcase my skills in web development, design, and problem-solving.</p>
                <div className="grid grid-cols-12 gap-5 mt-10">
                    {projects.map((project, index) => {
                        return <div className="col-span-4 w-fit p-5 rounded-2xl cursor-pointer pq" key={index}>
                            <div className="h-[250px] w-[450px] overflow-hidden">
                                <img src={project.img} className='w-full h-fit rounded' alt="project img" />
                            </div>
                            <div className="flex justify-between items-center mt-5">
                                <h3 className='frist-color  text-xl font-semibold'>{project.name}</h3>
                                <div className="">
                                    <a target='_blank' rel="noopener" href={project.demo}><i className="fa-regular fa-eye frist-color text-xl"></i></a>
                                    <a target='_blank' rel="noopener" href={project.github}><i className="fa-brands fa-github frist-color text-xl ms-1"></i></a>
                                </div>
                            </div>
                            <div className="flex justify-center mt-5">
                                {project?.skills.map((skill, index) => {
                                    return <img src={skill} className='w-[50px]' alt="skill img" />
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>





    </>
}
