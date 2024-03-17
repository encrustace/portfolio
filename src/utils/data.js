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

const contact = {
  name: "Imran Khan",
  email: "encrustace@gmail.com",
  country: "India",
  planet: "Earth",
  publikKey: `-----BEGIN PUBLIC KEY-----
  MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwgBg8ZxbZVchTdI3uA1B
  m5Honq5OjXLUdIk5upKGTy5cOQ6R6Wja0612P4IvaZDXpvaXxAuAkuW6+5lzriVM
  OBaKBGrB23/XDwP8trkMANrZlmgsQyoE6Q83871y5/uaLXFpnTYLTDVPug4ny9Jz
  mBLgtuVQElPbVBaMBCknO7J9Vpk4Ei7NHiKH1FR4CrGhMPzMZ6AHIas5P9Wn2GGv
  k+VdLmuVlbnZvxwAzhjdF8q+0/j4qPSNYdPwnuZBwIXCgcJm/Fo7/PjavVjM1OFa
  6mRFjPZLlIgvXB3lSrQ/yYFgpX25BplPdIkV4bbnudtFpLZRNuM2ujIFjbNn0fQm
  1QIDAQAB
  -----END PUBLIC KEY-----`
}

const skills = [
  "HTML",
  "JavaScript",
  "CSS",
  "React",
  "Next",
  "JSON",
  "Angular",
  "TypeScript",
  "Flutter",
  "Dart",
  "Node",
  "Java",
  "SpringBoot",
  "SQL"
]

export { links, skills, texts, contact };
