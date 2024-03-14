const now = new Date();
const options = { day: "numeric", month: "short", year: "numeric" };
const links = {
  resume: "https://docs.google.com/document/d/1rms7C_-1esNneY-Q8y-VConcEexneW3xTqM3flcAlZ4/edit?usp=sharing",
  github: "https://github.com/encrustace",
  linkedin: "https://linkedin.com/in/encrustace/",
  twitter: "https://twitter.com/encrustace"
};

const texts = {
  about: "I'm a software developer specializing in building user friendly digital platforms, using ReactJS, NextJS, Angular, have a look at skills section"
}

const skills = {
  frontend: [
    "html",
    "javascript",
    "css",
    "reactjs",
    "nextjs",
    "angular",
    "typescript",
    "flutter",
    "dart",
  ],
  backend: ["nodejs", "java", "spring boot", "sql", "nosql"],
  mix: ["JSON", "Thingworx", "Agile"],
};

export { links, skills, texts };
