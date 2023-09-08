function toggleMenu() {
  const menu = document.querySelector("#mobile-navbar");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

}
const flip1= () => {
  const content = document.querySelector("#project-content1");
  const about = document.querySelector("#project-about1")
  content.classList.toggle("hidden");
  about.classList.toggle("hidden")

}
const flip2 = () => {
  const content = document.querySelector("#project-content2");
  const about = document.querySelector("#project-about2")
  content.classList.toggle("hidden");
  about.classList.toggle("hidden")

}
const flip3 = () => {
  const content = document.querySelector("#project-content3");
  const about = document.querySelector("#project-about3")
  content.classList.toggle("hidden");
  about.classList.toggle("hidden")

}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  sun.classList.remove("hidden");
  moon.classList.add("hidden");

} else {
  document.documentElement.classList.remove('dark')
  sun.classList.add("hidden");
  moon.classList.remove("hidden");}
  const themeSelector = () => {
    sun.classList.toggle("hidden");
    moon.classList.toggle("hidden");
    document.documentElement.classList.toggle("dark")

  }

  document.addEventListener('DOMContentLoaded', toggleMenu)

