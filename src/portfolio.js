/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Suraj Kumar",
  title: "Hi all, I'm Suraj",
  subTitle: emoji(
    "A passionate DevOps engineer 🚀 having an experience of building,deployment and maintaining Web and Mobile applications with Docker/ Kubernetes / JavaScript / ReactJs / Nodejs / Java/ and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10up6ACFHeIw0kJUu2AMvPAn5xq4SM-zN/view?usp=share_link",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Surajkumar98012",
  linkedin: "https://www.linkedin.com/in/kumar-suraj-7057321a6/",
  gmail: "kumarsuraj950788@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://medium.com/@srjrnw9",
  stackoverflow: "https://stackoverflow.com/users/15656299/suraj-kumar",
  instagram: 'https://www.instagram.com/suraj_parmar09/',
  twitter: 'https://twitter.com/SurajKumar_09',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Punjab Technical University",
      logo: require("./assets/images/PTULogo.gif"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2019 - April 2023",
      desc: "Participated in many Technical event and won many minds.",
      descBullets: [
        "Took courses about Software Engineering, Web Development, Operating Systems, ..."
      ]
    },
    {
      schoolName: "Shanti Niketan Public School",
      logo: require("./assets/images/shantilogo.png"),
      subHeader: "Intermediate of Science",
      duration: "April 2016 - April 2018",
      desc:
        "Get 75 % marks in CBSE Exam",
      descBullets: ["Qualified jee mains"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "frontend/Backend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer",
      company: "Script Foundation",
      companylogo: require("./assets/images/script.webp"),
      date: "March 2021 – Present",
      desc:
        "Changing lives of developers one line of code at a time.",
      descBullets: [
        "Custom building websites",
        "Mentor",
      ]
    },
    {
      role: "Freelancer",
      company: "Fiver",
      companylogo: require("./assets/images/fiver.png"),
      date: "Sep 2020 – present",
      desc:
        "I build many websites for client"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Surajkumar98012", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/15.png"),
      projectName: "SFP Website",
      projectDesc: "This is the Main website of Script Fellowship Program by Script Foundation",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/Script-Fellowship-Program/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/1.png"),
      projectName: "Code Dazzlers Website",
      projectDesc: "This website for online Bootcamps and educational Content,and it UI is awesome !",
      footerLink: [
        {
          name: "Visit Website",
          url: " https://surajkumar98012.github.io/htmlma/"
        }
      ]
    },
    {
      image: require("./assets/images/1.jpeg"),
      projectName: "GGI Student Pannel",
      projectDesc: "GGI Student App is a college management application which basically managed most of the activity of college.",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Surajkumar98012/GGIStudentAppp"
        }
      ]
    },
    {
      image: require("./assets/images/fb.png"),
      projectName: "Facebook-clone",
      projectDesc: "This is the facebook-clone in which user can sigh in with google auth and post own news feeds",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://heuristic-poincare-33966e.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/12.png"),
      projectName: "Tiktok-clone",
      projectDesc: "In this Clone we puch some basic functionality and fetch data from mongodb database",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tiktok-clone-7abb2.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/14.png"),
      projectName: "Amazon-Clone",
      projectDesc: "In this amazon clone user can login and add product to cart and buy product with awesome payment gateway,this is fully functional e-commerce website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://amazon-clone-sigma-ecru.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/16.png"),
      projectName: "Pharmacy Management System",
      projectDesc: "This is Complete Full-stack management system with all fuctionality like,search,admin and pharmacist login and stock report add ,delete and update all medicide and suppliers and purchase medicine with print invoice functionality",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/file/d/1OB-J32TaQQPL_5jXE3nF8v-UeIyjT1F4/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/8.png"),
      projectName: "Homely",
      projectDesc: "This is our start-up website ,We deliver world-class living experiences through our high-quality, technology-enabled, service-led housing ecosystem so that you can forget about the little worries and focus on becoming the best version of you.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/Homely/"
        }
      ]
    },
    {
      image: require("./assets/images/7.png"),
      projectName: "Event-planner website",
      projectDesc: "This is my freelancing Project,this website show about event planners for diffrent Ceromany,This website has awesome looking UI,and I use only html,css and javascript for building this awesome looking website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/Weeding-Planner-Website/"
         
        }
      ]
    },
    {
      image: require("./assets/images/2.png"),
      projectName: "Cosmatic Shop website",
      projectDesc: "This is an awesome looking Cosmatic shop website by using HTML Bootstrap NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/cosmatic1/"
        }
      ]
    },
    {
      image: require("./assets/images/3.png"),
      projectName: "Stationary shop website",
      projectDesc: "This is an awesome looking Stationary shop website by using HTML Bootstrap NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/stationary1-shop-layout/"
        }
      ]
    },
    {
      image: require("./assets/images/4.png"),
      projectName: "Basic e-commerce website Layout",
      projectDesc: "This is an Homepage layout by using Bootstrap Framework NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/homepage-/"
        }
      ]
    },
    {
      image: require("./assets/images/5.png"),
      projectName: "Grocery Shop",
      projectDesc: "This is an awesome looking Stationary shop website by using HTML Bootstrap NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/groceryshop1/"
        }
      ]
    },
    {
      image: require("./assets/images/6.png"),
      projectName: "Food Shop",
      projectDesc: "This is an awesome looking Stationary shop website by using HTML Bootstrap NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/food1/"
        }
      ]
    },
    {
      image: require("./assets/images/9.png"),
      projectName: "To-do-list-website",
      projectDesc: "This is an awesome looking to-do-list website,It is very reliable.NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    },
    {
      image: require("./assets/images/10.png"),
      projectName: "Digital Clock",
      projectDesc: "This is an awesome looking Digital Clock by using HTML,CSS and Javascript.NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/Digital-clock/"
        }
      ]
    },
    {
      image: require("./assets/images/11.png"),
      projectName: "JS DrumKit",
      projectDesc: "This is an awesome looking Keypad DrumKit by using HTML,CSS and Javascript.NOTE : Please Open this on desktop For better experiance",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajkumar98012.github.io/Drumkit/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9507887679",
  email_address: "kumarsuraj950788@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "SurajKumar_09", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
