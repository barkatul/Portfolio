import {
    backend,
    creator,
    css,
    docker,
    git,
    hfc,
    html,
    intu,
    javascript,
    keploy,
    kubesimplify,
    medicall,
    mobile,
    mongodb,
    nike,
    nodejs,
    reactjs,
    redux,
    tailwind,
    threejs,
    typescript,
    vygr,
    web,
    wgpt,
    yt,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Youtube",
        icon: yt,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Kubesimplify Ambassador",
        company_name: "Kubesimplify",
        icon: kubesimplify,
        iconBg: "#383E56",
        date: "March 2022 - November 2022",
        points: [
            "Crafted a well-received series of 3 blogs titled 'Let's Simplify Golang,' 2 of which were featured on Hashnode.",
            "Produced 2 informative YouTube tutorials aimed at beginners, covering essential Linux concepts.",
            "Authored over 10 insightful blogs to enrich the Kubesimplify community.",
            "Engaged in collaborative efforts to drive impactful technical initiatives and promote knowledge-sharing.",
        ],
    },
    {
        title: "Developer Relation",
        company_name: "Keploy",
        icon: keploy,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - March 2023",
        points: [
            "Streamlined technical workflows through comprehensive documentation, facilitating seamless onboarding for new hires",
            "Translated intricate customer requirements into clear and concise use cases, enhancing project understanding and execution.",
            "Conducted 9 impactful online sessions across prestigious Indian colleges, promoting API Testing Awareness and fostering industry engagement.",
            "Authored informative blogs, amplifying company thought leadership and online presence within the technical community.",
        ],
    },
    {
        title: "Founder",
        company_name: "HackForCode",
        icon: hfc,
        iconBg: "#383E56",
        date: "Sep 2022 - Present",
        points: [
            "Established HackForCode as a vibrant community encompassing over 1000 students and professionals dedicated to fostering innovation and collaboration.",
            "Orchestrated the development of a dynamic YouTube channel boasting 42 engaging videos, amassing a dedicated following of 1k subscribers.",
            "Spearheaded our podcast initiative, featuring insightful discussions with over 20 esteemed guests and garnering over 27k views, amplifying our impact and reach within the tech community.",
        ],
    },
    {
        title: "Freelance Content Creator",
        company_name: "Vygr India",
        icon: vygr,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Present",
        points: [
            "Conceptualized, scripted, recorded, and edited around 10 engaging YouTube videos, showcasing a diverse range of topics and insights.",
            "Crafted compelling reels for each video, enhancing visual appeal and audience engagement, thereby maximizing the impact of the content.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Barkatul is an exceptional web developer. His dedication, expertise, and innovative solutions significantly contributed to our online success. Highly recommended!.",
        name: "Intekhab Alam",
        designation: "Director",
        company: "Paradise Medicall",
        image: intu,
    },
    {
        testimonial:
            "Barkatul excels as a developer advocate. His clear communication and deep passion for technology are truly commendable. He consistently inspire and support our team and the wider developer community.",
        name: "Ankit Kumar",
        designation: "Ex-Developer Advocate",
        company: "Keploy",
        image: intu,
    },
    {
        testimonial:
            "As a professional in the tech industry, I appreciate the insights shared on HackForCode's YouTube channel. The podcasts are especially insightful, offering valuable perspectives from industry leaders. Highly recommended for anyone looking to stay ahead in the world of technology.",
        name: "Apoorv Goyal",
        designation: "Founder",
        company: "Vitual Tech School",
        image: intu,
    },
];

const projects = [
    {
        name: "Medicall",
        description:
            "Developed a React website enabling users to browse services, explore available doctors, and seamlessly book appointments via call or WhatsApp for enhanced client accessibility and user convenience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "gray-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: medicall,
        source_code_link: "https://github.com/barkatul/Medicall",
        live_link: "https://www.paradisemedicall.com/",
    },
    {
        name: "Nike-Clone",
        description:
            "Crafted an impressive UI replica of Nike's platform using React and Tailwind CSS, meticulously emulating the brand's sleek and modern design elements to deliver an immersive user experience.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: nike,
        source_code_link: "https://github.com/barkatul/Nike-Clone",
        live_link: "https://nike-clone-olive.vercel.app/",
    },
    {
        name: "WhatsAppGPT",
        description:
            "Experience the magic of ChatGPT right from your WhatsApp! Introducing WhatsAppGPT, powered by Node.js and the Baileys library, flawlessly integrated with the OpenAI API. Now, interact with ChatGPT hassle-free, no sign-ins required!",
        tags: [
            {
                name: "nodeJS",
                color: "blue-text-gradient",
            },
            {
                name: "OpenAI-API",
                color: "green-text-gradient",
            },
            {
                name: "baileys",
                color: "pink-text-gradient",
            },
        ],
        image: wgpt,
        source_code_link: "https://github.com/barkatul/whatsappGPT",
        live_link: "https://github.com/barkatul/whatsappGPT",
    },
];

export { experiences, projects, services, technologies, testimonials };
