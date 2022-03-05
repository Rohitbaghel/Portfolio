/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Rohit Baghel",
  logo_name: "Rohit Baghel",
  // nickname: "harry / picleric",
  full_name: "Rohit Baghel",
  subTitle: "Full Stack Developer, Open Source Enthusiast, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1uj166VtDoKyUQQz9hL5SFm4UqwHgI1cT/view?usp=sharing",
  mail: "baghel.rohit99@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Rohitbaghel",
  linkedin: "https://www.linkedin.com/in/rohit-baghel-334548190/",
  gmail: "baghel.rohit99@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/Aashu.Baghel11",
  twitter: "#",
  instagram: "#",
};

const skills = {
  data: [
    {
      title: "Front End skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS,Tailwindcss",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Tailwindcss",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Backened Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Backened platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
        "⚡ Creating application backend in Node, Express,MongoDB,Postman",
        "⚡ Integration of third party services such as Google",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects,HTMl,CSS,Javascript and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.JPG",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@baghel.rohit99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "NordStorm.com",
      url:
        "https://maheshvaitla.github.io/Project_NordStorm/html/landingpage.html",
      description:
        " NordStorm is an American luxury department store chain, specializes in manufacturing and selling urban style clothing and accessories. The brand uses the US popular culture in its product design.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Bootstrap",
          iconifyClass: "simple-icons:bootstrap",
        },
      ],
    },
    {
      id: "1",
      name: "Cultfit.com",
      url: "https://masaicult.herokuapp.com/",
      description:
        " Cult.fit is a chain of group workout fitness centres across Bengaluru, Hyderabad, Delhi and Gurugram. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
        {
          name: "ejs",
          iconifyClass: "simple-icons:ejs",
        },
        {
          name: "Tailwindcss",
          iconifyClass: "simple-icons:tailwindcss",
        },
      ],
    },
    {
      id: "2",
      name: "Bookmyshow",
      url: "bookmyshow03.netlify.app",
      description:
        "An E-commerce web application to book movie tickets, make advance bookings for movies, buy play tickets, event tickets and sport tickets. watch movie videos and trailer etc. ",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
        {
          name: "Tailwindcss",
          iconifyClass: "simple-icons:tailwindcss",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
  projects,
};
