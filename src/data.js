import { ImHtmlFive } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import img1 from "./ProjectImg/PortfolioCV.png";

const info = {
  selfInfo: {
    name: "Sagar Malik",
    DescribeYourself: "Full-Stack Developer",
    Sent1:
      "I'm A Full Stack Web Developer From Hyderabad, India. I Have A Passion For",
    sent2: "Computers And Love For Web Developement.",
    experience: "<1 Years",
    language: "English, Hindi",
    birthDate: "20 March 2000",
    mobileNo: "+91 9370763490",
    location: "Siddiq Nagar, Hyderabad",
    email: "samkil@gmail.com",
  },
  projects: [
    {
      image: img1,
      title: "Portfolio CV",
      time: "March 2023",
      technologies: ["React.js", "JavaScript", "HTML", "CSS"],
      // link: "https://tushar-pethkar-portfolio1.netlify.app/",
    },
  ],
  skills: [
    {
      img: <ImHtmlFive className="icon" style={{ color: "#990000" }} />,
      name: "HTML",
      id: { color: "red" },
    },
    {
      img: <IoLogoCss3 className="icon" style={{ color: "#2965f1" }} />,
      name: "CSS",
      id: { color: "red" },
    },
    {
      img: <TbBrandJavascript className="icon" style={{ color: "#f0db4f" }} />,
      name: "JAVASCRIPT",
    },
    {
      img: <FaReact className="icon" style={{ color: "#61dbfb" }} />,
      name: "REACT.JS",
      id: { color: "red" },
    },
    {
      img: <BsBootstrapFill className="icon" style={{ color: "#563d7c" }} />,
      name: "BOOTSTRAP",
      id: { color: "red" },
    },

    {
      img: <FaNode className="icon" style={{ color: "#215732" }} />,
      name: "NODE.JS",
      id: { color: "red" },
    },
    {
      img: <SiMongodb className="icon" style={{ color: "#589636" }} />,
      name: "MONGODB",
      id: { color: "red" },
    },
    {
      img: <SiMysql className="icon" style={{ color: "#00758f" }} />,
      name: "MY-SQL",
      id: { color: "red" },
    },
    {
      img: <FaJava className="icon" style={{ color: "#1FBED6" }} />,
      name: "JAVA",
      id: { color: "red" },
    },
    {
      img: <SiSpring className="icon" style={{ color: "#00FF7F" }} />,
      name: "SPRINGBOOT",
      id: { color: "red" },
    },
    {
      img: <FaPython className="icon" style={{ color: "#8B7D6B" }} />,
      name: "PYTHON",
      id: { color: "red" },
    },
  ],
  edu: [
    {
      time: "2022",
      class: "PG-DAC",
      name: "CDAC-Bangalore",
      marks: "Percentage: 67%",
    },
    {
      time: "2017-2021",
      class: "B.E - Information Technology",
      name: "St. Vincent Pallotti College of Engineering and Technology",
      marks: "Percentage: 74%",
    },
    {
      time: "2013-2014",
      class: "Class X",
      name: "KV Laitkor Peak Shillong-10, Meghalaya",
      marks: "Percentage: 84%",
    },
    {
      time: "2016-2017",
      class: "Class XII",
      name: "KV Vayusena Nagar, Nagpur, Maharashtra",
      marks: "Percentage: 56%",
    },
  ],
};
export default info;
