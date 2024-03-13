const now = new Date();
const options = { day: "numeric", month: "short", year: "numeric" };
const data = {
  shortDesc: "i build things for the web,mobile,iot & ai.",
  desc: "i'm a software developer specializing in building user friendly digital platforms, using ReactJS, NextJS, Angular, have a look at skills section.",
  college:
    "2015-2019 | Bachelor of Technology | Computer Science & Engineering",
  capgemini: "2020 -> software engineer -> associate consultant -> 2022",
  infosys: `2022 -> associate consultant -> senior associate consultant -> ${now.toLocaleDateString(
    "en-IN",
    options
  )}`,
};

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

export { data, skills };
