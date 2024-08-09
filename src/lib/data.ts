import { FaGithub, FaInstagram, FaLinkedin, FaArtstation, FaYoutube, FaDocker, FaEye } from 'react-icons/fa';
import {
    SiGumroad,
    SiAutodeskmaya,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiAdobeindesign,
    SiAdobepremierepro,
    SiKatana,
    SiKubernetes,
    SiFramer,
    SiGitlab,
    SiAutodesk,
    SiNuke,
    SiDiscord,
} from 'react-icons/si';

import {
    TbBrandTypescript,
    TbBrandReact,
    TbBrandNodejs,
    TbBrandPrisma,
    TbBrandTailwind,
    TbBrandNextjs,
    TbBrandFigma,
    TbBrandPython,
    TbMail,
} from 'react-icons/tb';
import { SiPostgresql, SiPostman, SiLinux, SiShadcnui, SiPycharm, SiNextra } from 'react-icons/si';
import { PiCirclesThreePlusFill } from 'react-icons/pi';

import { title } from 'process';

export const navItems = [
    { title: 'Home', link: '/' },
    { title: 'Skills', link: '/skills' },
    { title: 'Projects', link: '/projects' },
] as const;

export const people = [
    {
        id: 1,
        name: 'Sangram Barge',
        designation: 'sangrambarge26@gmail.com',
        image: '/my-image.jpg',
    },
];

export const socialLinks = [
    { title: 'discord', link: 'https://discord.com/users/824538163938066443', icon: SiDiscord },
    { title: 'youtube', link: 'https://youtu.be/HDMj6wdLQ-4', icon: FaYoutube },
    { title: 'linkedIn', link: 'https://www.linkedin.com/in/sangram-dhavalchandra-barge-0221381b1/', icon: FaLinkedin },
    { title: 'github', link: 'https://github.com/vishalkadam7', icon: FaGithub },
    { title: 'instagram', link: 'https://www.instagram.com/sangram_barge_26/', icon: FaInstagram },
    { title: 'artstation', link: 'https://vishalkadam.artstation.com', icon: FaArtstation },
    { title: 'gumroad', link: 'https://vishalkadam.gumroad.com', icon: SiGumroad },
    { title: 'mail', link: 'mailto:sangrambarge26@gmail.com', icon: TbMail },
] as const;

export const embedLinks = [
    {
        title: 'showreel',
        link: 'https://www.youtube.com/embed/HDMj6wdLQ-4?autoplay=1&loop=1&mute=1&controls=0',
    },
    {
        title: 'demoreel',
        link: 'https://www.youtube.com/embed/HDMj6wdLQ-4?autoplay=1&loop=1&mute=1&controls=0',
    },
] as const;

export const educations = [
    { school: 'Yashwantrao Chavan Maharashtra Open University | 2021 - 2024', courses: ['Bachelor of Arts (B.A)'] },
    {
        school: 'JUNIOR COLLEGE OF ART, COMMERCE SCIENCE, RAHIMATPUR | 2018 - 2019 ',
        courses: [' Higher Secondary Certificate (HSC)'],
    },
    { school: 'SARSWATI VIDYALAYA KOREGAON | 2015 - 2016', courses: ['Secondary School Certificate (SSC)'] },
] as const;

export const technicalQualifications = [
    { school: 'Infinity Animation Institute | 2018 - 2019', courses: ['Diploma In Charecter Animation'] },
] as const;

export const experience = [
    { school: 'Self Employed | October 2023 - Present', courses: ['Rotomation Artist'] },
    {
        school: 'COMPANY3 METHOD | Spatember 2022 - Spatember 2023',
        courses: [
            'Worked at Company 3 as a mid-level Rotomation and Camera Tracking artist',
            'Specialized in camera tracking through advanced personal training',
            'Expertise in seamlessly integrating body movements and camera motion for realistic visual effects',
            'Contributed to projects requiring precise tracking and alignment of 3D elements in live-action movies',
        ],
    },
    {
        school: 'Double Negative ( DNEG ) | February 2022 - September 2022',
        courses: [
            'Worked at DNEG as a Body Tracking TD ',
            'Worked on large env assets and using optimized workflows',
            'Helped artists identify issues and guide to solve them',
            'Troubleshooting Maya issues. Introducing out of the pipeline solutions. ',
        ],
    },
    {
        school: 'KW Consulting Pvt. Ltd | June 2013 - Oct 2014',
        courses: [
            'Technical Associate in the Project of “Unique Identification Authority of India (UIDAI - Aadhaar)',
            'Installation, Configuration, Application Maintenance and Troubleshooting.',
            'Enterprise Application Deployment and Management.',
            'Technical assistance in monitoring through backup/restore, upgrades, failover, and recovery.',
            'Team Supervision and Performance Management.',
            'Desktop and Laptop Maintenance and Troubleshooting (Windows, Linux).',
            'Providing technical support to clients via email, live chat, phone or On-site.',
        ],
    },
] as const;

export const skills = [
    {
        title: 'Software & Tools',
        lists: [
            { title: 'Maya', icon: SiAutodeskmaya },
            { title: 'Photoshop', icon: SiAdobephotoshop },
            { title: 'Illustrator', icon: SiAdobeillustrator },
            { title: 'InDesign', icon: SiAdobeindesign },
            { title: 'Python', icon: TbBrandPython },
            { title: 'Katana', icon: SiKatana },
            { title: 'Premiere Pro', icon: SiAdobepremierepro },
            { title: 'Clarisse IFX', icon: PiCirclesThreePlusFill },
            { title: '3DS Max', icon: SiAutodesk },
            { title: 'Mudbox', icon: SiAutodesk },
            { title: 'Nuke', icon: SiNuke },
    },
] as const;

export const tags = [
    { title: 'OpenSource', link: 'opensource' },
    { title: 'HTML', link: 'html' },
    { title: 'CSS', link: 'css' },
    { title: 'JavaScript', link: 'javascript' },
    { title: 'Next.js', link: 'next.js' },
    { title: 'Python', link: 'python' },
    { title: 'shows', link: 'shows' },
    { title: 'MPCfilm', link: 'mpcfilm' },
    { title: 'Dneg', link: 'dneg' },
];

export const projects = [
    {
        title: 'vops-workspace',
        image: '/projects/vops-workspace.png',
        link: 'https://vishops.vercel.app',
        sourceCode: 'https://github.com/vishalkadam7/vops-workspace',
        tag: ['HTML', 'CSS', 'JavaScript', 'OpenSource'],
    },
    {
        title: 'Artdev-portfolio',
        image: '/projects/artdev-portfolio.png',
        link: 'https://vishify.vercel.app',
        sourceCode: 'https://github.com/vishalkadam7/artdev-portfolio',
        tag: ['Next.js', 'React', 'JavaScript', 'OpenSource'],
    },
    {
        title: 'Dumbo',
        image: '/shows/Dumbo.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Dolittle',
        image: '/shows/Dolittle.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Chip n Dale: Rescue Rangers',
        image: '/shows/Chip-n-Dale-Rescue-Rangers.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'The Call of the Wild',
        image: '/shows/The-Call-of-the-Wild.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Godzilla vs Kong',
        image: '/shows/Godzilla-vs-Kong.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'The Predator',
        image: '/shows/The-Predator.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Shazam!',
        image: '/shows/Shazam.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Shazam! Fury of the Gods',
        image: '/shows/Shazam-Fury-of-the-Gods.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'Dneg', 'Environment', 'props'],
    },
    {
        title: 'RRR',
        image: '/shows/RRR.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
    {
        title: 'Justice League',
        image: '/shows/Justice-League.png',
        link: null,
        sourceCode: null,
        tag: ['shows', 'MPCfilm', 'Environment', 'props'],
    },
] as const;
