const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let navs = document.querySelectorAll("nav a");
let navIds = Object.keys(siteContent["nav"]);

for(let i = 0; i < navs.length; i++) {
  navs[i].setAttribute("id", navIds[i]);
  navs[i].innerHTML = siteContent["nav"][navIds[i]];
}

document.querySelector(".cta-text h1").innerHTML = siteContent["cta"]["h1"].split(" ").join("<br>");
document.querySelector(".cta-text button").innerHTML = siteContent["cta"]["button"];
document.querySelector("#cta-img").setAttribute("src", siteContent["cta"]["img-src"]);

let mainContentH4s = document.querySelectorAll(".main-content h4");
let mainContentPs = document.querySelectorAll(".main-content p");

// let mainContentH4Ids = siteContent["main-content"]

let cntP = 0, cntH4 = 0;

for(key in siteContent["main-content"]) {
  if(key.indexOf("content") >= 0) {
    mainContentPs[cntP].setAttribute("id", key);
    mainContentPs[cntP].innerHTML = siteContent["main-content"][key];
    cntP++;
  } else if(key.indexOf("h4") >= 0) {
    mainContentH4s[cntH4].setAttribute("id", key);
    mainContentH4s[cntH4].innerHTML = siteContent["main-content"][key];
    cntH4++;
  }
}

document.querySelector(".main-content img").setAttribute("src", siteContent["main-content"]["middle-img-src"]);

/*
"contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },*/

let contactEles = document.querySelectorAll(".contact *");

Object.keys(siteContent["contact"]).forEach(function(key, idx) {
  contactEles[idx].setAttribute("id", key);
  contactEles[idx].innerHTML = siteContent["contact"][key];
})

let footerP = document.querySelector("footer p");

footerP.setAttribute("id", "copyright");
footerP.innerHTML = siteContent["footer"]["copyright"];