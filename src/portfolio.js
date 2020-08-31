﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Payden Dyer",
  title: "Hi all, I'm Payden",
  subTitle: emoji("A passionate Software Developer 🚀 with experience building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1sMa2UISTgCvKyeSVou1URWyYDbkEf-o5/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/paydendyer",
  linkedin: "https://www.linkedin.com/in/paydendyer/",
  gmail: "payden.dyer@outlook.com",
  /**gitlab: "https://gitlab.com/saadpasta",*/
  facebook: "https://www.facebook.com/payden.dyer.9/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML/CSS",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript",
      progressPercentage: "70%"
    },
    {
      Stack: "React",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Programming",  
      company: "Metropolitan Community College",
      companylogo: require("./assets/images/MCC.png"),
      date: "August 2019 – Present",
      //desc:,
      descBullets: [
        "Web Page Creation",
        "WordPress",
        "JavaScript 1 & 2(React, Angular)",
        "Problem Solving & Programming",
        "Database Design",
        "Cloud Computing(AWS)"
      ]
    },
    {
      role: "JavaScript",   
      company: "Do Space",
      companylogo: require("./assets/images/dospace.png"),
      date: "March 2020 – June 2020",
      desc: "Hello Code 2 is an eight-week course requiring coding experience that explores JavaScript and dynamic and responsive web applications."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I HAVE BEEN WORKING ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Twitter Flight School",
      subtitle: "An online learning platform that teaches you everything you need to know about advertising on Twitter.",
      image: require("./assets/images/flightschool.png"),
      footerLink: [
        { name: "View Certification", url: "https://www.twitterflightschool.com/student/award/118954790" },
      ]
    },
    {
      title: "Free Code Camp",
      subtitle: "Completed coursework and projects for Responsive Web Design",
      image: require("./assets/images/freeCodeCamp.png"),
      footerLink: [
        { name: "View Certification", url: "https://www.freecodecamp.org/certification/payden/responsive-web-design" },
        { name: "View Technical Documentation Project", url: "https://codepen.io/paydendyer/pen/abvNyqb"}
      
      ]
    },

    {
      title: "Codecademy",
      subtitle: "Completed Certifcation for React, HTML, CSS, JavaScript, Alexa Skills, Lambda",
      image: require("./assets/images/codecademy.png"),
      footerLink: [
        { name: "View Certifications", url: "https://www.codecademy.com/profiles/paydendyer" }
      ]
    }
  ]
};

// Blogs Section

/*const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};
*/
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 402-213-2311",
  email_address: "payden.dyer@outlook.com"
};

//Twitter Section

/*const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};*/
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo };
