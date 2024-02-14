import {FaReact,FaCss3Alt} from 'react-icons/fa';
import {SiJavascript,SiTailwindcss,SiAntdesign,SiNextdotjs,SiMaterialdesign} from 'react-icons/si';
import { TbBrandRedux } from "react-icons/tb";
import TurismoImg from '../assets/Turismo.png'
import MetabolicImg from '../assets/metaboilc.png'
import StampImg from '../assets/SAS2.jpg'
import memoneImg from '../assets/Zyfeng.png'

export const skills = [
    {
        tech:'JavaScript',
        icon:<SiJavascript/>
    },
    {
        tech:'React JS',
        icon:<FaReact/>
    },
    {
        tech:'Next JS',
        icon:<SiNextdotjs/>
    },
    {
        tech:'Redux',
        icon:<TbBrandRedux/>
    },
    {
        tech:'CSS',
        icon:<FaCss3Alt/>
    },
    {
        tech:'Tailwind Css',
        icon:<SiTailwindcss/>
    },
    
    {
        tech:'Ant Design',
        icon:<SiAntdesign/>
    },
    {
        tech:'Material UI',
        icon:<SiMaterialdesign/>
    },
]

export const projectDetails = [
    {
        project_name:'La Memone',
        project_des:"This is an dashboard of a mobile app that can only be used by the authorized personals. The main features of the dashboard is to keep track of all the projects going on with in the company, sales and purchases with different companies, to assign employees a particular project. Some main features are Role-based-access to the employees, only access to those projects which are assigned to them, analyzing and ranking projects based upon different performance perimeters. ",
        tech_stack:['React JS', 'Bootstrap','Firebase'],
        project_image:memoneImg,
        project_url:'https://github.com/eliqwamo/memone/tree/main/admin',
        reverse:false
    },
    {
        project_name:'Turismo',
        project_des:"This is a car rental website. The website is actually an online store for car rental where user can scroll through all the available cars. The user is able to see the details of selected car. The main features are payment, authentication of users, access on basis of login",
        tech_stack:['React JS', 'CSS','Node Js','Framer-motion'],
        project_image:TurismoImg,
        project_url:'https://github.com/hussnainAli14/Tourism',
        reverse:true
    },
    {
        project_name:'Metabolic Healing',
        project_des:"This is a Learning Management System. There are two types of users in general for this system. Students and Teachers. Students can access the available courses, enroll into the course of their need. On the other hand, teachers can upload a courses along with all the contents of the course. The major features are payment method for subscribing a course, accessing the enrolled courses, role based access.",
        tech_stack:['React JS', 'Sync fusion','Tailwind CSS'],
        project_image:MetabolicImg,
        project_url:'https://github.com/hussnainAli14/AdminPanel',
        reverse:false

    },
    {
        project_name:'Stamp Automation System',
        project_des:"This was basically my first project. This is a system desgined to automate the Stamp process. Basically, this system enables the users to sign an agreement between them. The user writes the agreement and signs it. After that, the agreement is sent to the second user using his public key. The user recieves the agreement on his account. The user when signs the agreement, the creater of the agreement recieves a notification with the signed agreement. The agreement is than signed by the witnesses in same way and than uploaded to database.",
        tech_stack:['React JS', 'Node JS','CSS'],
        project_image:StampImg,
        project_url:'https://github.com/hussnainAli14/StampAutomationSystem',
        reverse:true

    }
]