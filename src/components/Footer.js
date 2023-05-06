import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook'
import { importantLinks } from '../helpers/importantLinks';
import '../styles/Footer.css'
const Footer = () => {
    const {LinkedIn, Facebook,GitHub, Instagram } = importantLinks;
    return (  
        <div className="footer">
            <div className="socialMedia">
            <a href={LinkedIn} target="_blank"  rel="noreferrer"><LinkedInIcon/></a>
            <a href={Facebook} target="_blank"  ><FacebookIcon/></a>
            <a href={Instagram} target="_blank"  rel="noreferrer"><InstagramIcon/></a>
            <a href={GitHub} target="_blank"  rel="noreferrer"> <GithubIcon/></a>
            </div>
            <p> Shashank </p>
        </div>
    );
}
 
export default Footer;