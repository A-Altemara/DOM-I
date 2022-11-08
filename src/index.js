const { getDefaultNormalizer } = require("@testing-library/dom");

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
const header = document.querySelector("header")
const navBar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const navNames = {
  "nav-item-1": "Services",
  "nav-item-2": "Product",
  "nav-item-3": "Vision",
  "nav-item-4": "Features",
  "nav-item-5": "About",
  "nav-item-6": "Contact",
}
document.querySelector("nav a:nth-of-type(1)").textContent = "Services";
document.querySelector("nav a:nth-of-type(2)").textContent = "Product";
document.querySelector("nav a:nth-of-type(3)").textContent = "Vision";
document.querySelector("nav a:nth-of-type(4)").textContent = "Features";
document.querySelector("nav a:nth-of-type(5)").textContent = "About";
document.querySelector("nav a:nth-of-type(6)").textContent = "Contact";

navBar.classList.add("italic");

const linksArray = Array.from(navLinks);
console.log(linksArray);
navBar.style.fontStyle = 'italic'
navBar.style.fontSize = '1.3rem'
const logo = document.querySelector('#logo-img')
logo.setAttribute("src", "http://localhost:9000/img/logo.png")

const titleSection = document.querySelector("cta-text")
const heading = document.querySelector('h1')
heading.textContent = 'DOM is Awesome'
const button = document.querySelector('button')
button.textContent = 'Get Started'
const mainPic = document.querySelector('#cta-img')
mainPic.setAttribute('src', "http://localhost:9000/img/cta.png")


const topContent = document.querySelectorAll('.top-content h4')
topContent[0].textContent = siteContent["main-content"]["features-h4"]
topContent[1].textContent = siteContent["main-content"]["about-h4"]

const lowerPic = document.querySelector('#middle-img')
lowerPic.setAttribute('src', "http://localhost:9000/img/accent.png")

const lowerContent = document.querySelectorAll('.bottom-content h4')
lowerContent[0].textContent = siteContent["main-content"]["services-h4"];
lowerContent[1].textContent = siteContent["main-content"]["product-h4"];
lowerContent[2].textContent = siteContent["main-content"]["vision-h4"];

const contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = "Contact"
const contactParag = document.querySelectorAll(".contact p")
contactParag[0].textContent = "123 Way 456 Street Somewhere, USA"
contactParag[1].textContent = "1 (888) 888-8888"
contactParag[2].textContent = "sales@greatidea.io"


const footerA = document.querySelector("footer a")
footerA.textContent = "Copyright Great Idea! 2021"
footerA.setAttribute('class', 'bold')
