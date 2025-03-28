import React from "react";

function Experiance() {
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Professional Experiance</h1>
        <span>
          <b className="text-green-600 font-semibold text-lg">DevOps Engineer, Keen & Able Pvt. Ltd, [Oct 2024 - Mar 2025]</b> <br/>
          <b>Project Discription: </b>
          I independently developed and implemented a complete CI/CD pipeline for a <a className="text-red-600">React-based </a> 
          project by leveraging various DevOps tools and technologies. The project involved 
          building two distinct pipelines—one using Shell scripts to manage each step manually 
          and another using Jenkins to fully automate the process after every push to GitHub. 
          The automation ensured seamless integration, testing, and deployment, significantly 
          reducing manual effort and increasing efficiency.<br/>To streamline the deployment process, 
          I created Dockerfiles to containerize the application, ensuring consistency across 
          different environments. I also configured GitHub webhooks to trigger automated workflows, 
          enabling real-time deployment and continuous delivery. Throughout the project, 
          I meticulously documented the entire process in an implementation journal, providing a 
          comprehensive reference for understanding pipeline architecture, automation logic, 
          and issue resolution. <br/><br/>After completing the pipeline setup, I developed and executed 
          Playwright test cases to validate the application’s functionality and UI 
          responsiveness across multiple scenarios. I ensured that the application worked 
          flawlessly in different environments, including an AWS instance machine, by rigorously 
          testing its performance, security, and scalability. This cross-environment testing 
          guaranteed that the application remained stable and secure under varying conditions.<br/><br/>
          Additionally, I proactively troubleshot and resolved any issues that arose during development 
          and deployment, optimizing the pipeline for greater reliability and efficiency. 
          The experience enhanced my ability to manage complex DevOps processes and reinforced my 
          expertise in automating workflows, ensuring smooth application deployment, and maintaining 
          consistent application performance across diverse environments.
        </span>
        <br/>
        <br/>
        <p className="text-black-600 font-semibold text-xl">
           In this project, I utilized the following technologies:
        </p>
        <a>React JS</a><br/>
        <a>JavaScript</a><br/>
        <a>Node JS</a><br/>
        <a>Docker</a><br/>
        <a>Shell Scripting</a><br/>
        <a>Jenkins</a><br/>
        <a>GitHub Webhooks</a><br/>
        <a>Playwright for testing functionality</a><br/>
        <a>AWS EC2 for environment testing</a><br/>
      </div>
    </div>
  );
}

export default Experiance;