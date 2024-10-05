import hero from "../assets/hero.jpg";
import react from "../assets/react.jpg";
import next from "../assets/next.png";
import tailwind from "../assets/tailwind.jpg";

import portfolio1 from "../assets/a.jpg";
import portfolio2 from "../assets/b.jpg";
import portfolio3 from "../assets/c.jpg";
import portfolio4 from "../assets/d.jpg";
import portfolio5 from "../assets/e.jpg";
import portfolio6 from "../assets/f.jpg";

export const LINKS = [
    {
        name: "Stack",
        link: "#services",
    },
    {
        name: "Portfolio",
        link: "#portfolio",
    },
    {
        name: "Contact",
        link: "#contact",
    },
];

export const HERO_CONTENT = {
    title: "Abhinandan",
    subtitle: "A Full-Stack Web Developer",
    image: hero,
};

export const SERVICES_CONTENT = [
    {
        title: "React",
        description:
            "A JavaScript library for building user interfaces. React allows you to build interactive UIs with reusable components, ensuring fast and scalable applications.",
        image: react,
        alt: "React",
    },
    {
        title: "Next.js",
        description:
            "A powerful React framework for building server-rendered applications. Next.js provides features like static site generation, server-side rendering, and improved SEO performance.",
        image: next,
        alt: "Next.js",
    },
    {
        title: "Tailwind CSS",
        description:
            "A utility-first CSS framework for creating custom designs quickly. Tailwind CSS allows you to build responsive, modern layouts with minimal effort and maximum flexibility.",
        image: tailwind,
        alt: "Tailwind CSS",
    },
];

export const PORTFOLIO_PROJECTS = [
    {
        id: 1,
        name: "Weather App",
        description:
            "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with JavaScript and CSS.",
        image: portfolio1,
        link: "https://ae-hertz.github.io/Weather-App/",
    },
    {
        id: 2,
        name: "Digital Clock",
        description:
            "A sleek digital clock built with React Vite and animated with Anime.js, displaying real-time user time and timezone with dynamic sphere animation, deployed on Vercel.",
        image: portfolio2,
        link: "https://clock-hertz.vercel.app/",
    },
    {
        id: 3,
        name: "Chat Application",
        description:
            "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
        image: portfolio3,
        link: "#",
    },
    {
        id: 4,
        name: "E-Commerce Platform",
        description:
            "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
        image: portfolio4,
        link: "https://github.com/user/ecommerce-platform",
    },
    {
        id: 5,
        name: "Personal Portfolio",
        description:
            "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
        image: portfolio5,
        link: "https://github.com/user/personal-portfolio",
    },
    {
        id: 6,
        name: "Cursor Animation",
        description:
            "An interactive cursor animation project utilizing HTML, CSS, and JavaScript, designed with customizable effects, and deployed on Vercel.",
        image: portfolio6,
        link: "https://cursor-animation-hertz.vercel.app/",
    },
];

export const CONTACT = {
    address: "Inside Github repo, at Floor.Vercel , USA",
    phoneNo: "+91 9090909090",
    email: "any@example.com",
};
