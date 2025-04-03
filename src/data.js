// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
//import Logo from "./images/logo.svg";
import Scrape0 from "./images/webscrape0.png";
import Lyric from "./images/lyricgpt.png";
import Electricity from "./images/electricity-money.jpg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "theriny";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="skill-icons:linkedin" />;


/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Data exploration is a joy for me, and Python is my coding language of choice. You never know what insight will come from a dataset, and that's what motivates me. I've wrangled, cleaned, and processed all types of data; from 2D images to 3D point clouds. From customer dashboard usage, to parking deck ingress and egress events. From marketing campaigns, to company filing reports. Data is gold!";

   

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:python" width="50" height="50"  className="display-4" />,
    name: "Python",
  },
  {
    id: 10,
    skill: <Icon icon="devicon:scikitlearn" width="125" height="75" className="display-4" />,
    name: "Scikit Learn",
  },
  {
    id: 6,
    skill: <Icon icon="logos:pandas" width="125" height="75" className="display-4" />,
    name: "Pandas",
  },
  {
    id: 2,
    skill: <Icon icon="ph:file-sql" className="display-4" />,
    name: "SQL",
  },
  {
    id: 3,
    skill: <Icon icon="logos:opencv" className="display-4" />,
    name: "Open CV",
  },
  {
    id: 4,
    skill: <Icon icon="logos:microsoft-power-bi" className="display-4" />,
    name: "Power BI",
  },
  {
    id: 5,
    skill: <Icon icon="devicon:azure" className="display-4" />,
    name: "Microsoft Azure",
  },
  
  {
    id: 7,
    skill: <Icon icon="logos:qlik" width="100" height="50"  className="display-4" />,
    name: "Qlik",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="logos:selenium" className="display-4" />,
    name: "Selenium",
  },
 
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["Edgar-Web-Scrape", "lyricScrape","Electricity-Price-Prediction"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "Edgar-Web-Scrape",
    image: Scrape0,
    
  },
  {
    name: "lyricScrape",
    image: Lyric,
  },
  {
    name: "Electricity-Price-Prediction",
    image: Electricity,
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xeqbyajp";
