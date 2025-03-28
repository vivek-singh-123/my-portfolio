import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.png";
import javascript from "../../public/javascript.png";
import mongoDB from "../../public/mongoDB.png";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/nodejs.png";
import tailwind from "../../public/tailwind.png";
import python from "../../public/python.png";
import java from "../../public/java.png";
import restapi from "../../public/restapi.png";
import sql from "../../public/sql.png";
import git from "../../public/git.png";
import github from "../../public/github.png";
import playwright from "../../public/playwright.png";
function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML 5",
    },
    {
      id: 2,
      logo: css,
      name: "CSS 3",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: express,
      name: "Express JS",
    },
    {
      id: 6,
      logo: reactjs,
      name: "React js",
    },
    {
      id: 7,
      logo: nodejs,
      name: "Node js",
    },
    {
      id: 8,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 9,
      logo: python,
      name: "Python",
    },
    {
      id: 10,
      logo: java,
      name: "Java",
    },
    {
      id: 11,
      logo: restapi,
      name: "REST APIs",
    },
    {
      id: 12,
      logo: sql,
      name: "SQL",
    },
    {
      id: 13,
      logo: git,
      name: "Git",
    },
    {
      id: 14,
      logo: github,
      name: "GitHub",
    },
    {
      id: 15,
      logo: playwright,
      name: "Playwright",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full"
                alt=""
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;