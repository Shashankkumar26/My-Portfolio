import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon  from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import { importantLinks } from "../helpers/importantLinks";
import '../styles/Home.css'
const Home = () => {
  const {LinkedIn, Facebook,GitHub, Instagram } = importantLinks;
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shashank </h2>
        <div className="prompt">
          <p>A Software Developer with a passion for learning and creating.</p>
          <a href={LinkedIn} target="_blank"  rel="noreferrer"><LinkedInIcon/></a>
          <a href={Facebook} target="_blank"  rel="noreferrer"><FacebookIcon/></a>
          <a href={Instagram} target="_blank"  rel="noreferrer"><InstagramIcon/></a>
          <a href={GitHub} target="_blank"  rel="noreferrer"> <GithubIcon/></a>
           
           
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
            <li className="item">
                <h2>Front-End</h2>
                <span>ReactJs , HTML, CSS, NPM, Bootstrap</span>
            </li>
            <li className="item">
                <h2>Languages</h2>
                <span> C++, JavaScript, SQL </span>
            </li>
            <li className="item">
                <h2>Course Work</h2>
                <span> Data Structures, OOPS, UI Design</span>

            </li>
            <li className="item">
                < h2> Soft Skills</h2>
                 <span> Time Management, Team Work, Communication, Problem Solving</span>
            </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
