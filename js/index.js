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

// // Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])


// *****------Navigation--- *****//

let nav = document.querySelectorAll("nav a");
  nav[0].innerHTML = "Services";
  nav[0].style.color = "green";

  nav[1].innerHTML = "Product";
  nav[1].style.color = "green";

  nav[2].innerHTML = "Vision";
  nav[2].style.color = "green";

  nav[3].innerHTML = "Features";
  nav[3].style.color = "green";

  nav[4].innerHTML = "About";
  nav[4].style.color="green";

  nav[5].innerHTML = "Contact";
  nav[5].style.color = "green";

// ***** ------New Nav Items----- *****//

//------- Donate -----//
  const greatNav = document.querySelector('header nav');
  const donate = document.createElement('a');
  greatNav.appendChild(donate);
  donate.innerHTML = 'Donate';
  donate.style.color = 'green';
  donate.href = '#';


  //----- Sign In----//
  const signIn = document.createElement('a');
  greatNav.appendChild(signIn);
  signIn.innerHTML = 'Sign In';
  signIn.style.color = 'green';
  signIn.href = '#';



// *****------- CTA ------ *****//

//------Img------//
let ctaImg = document.getElementById("cta-img");
  ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


//------DOM IS AWESOME----//
let dom = document.querySelector(".cta-text h1");
  dom.innerHTML = "DOM <br> is <br> Awesome";


//---- CTA button Get Started-----//
let ctaButton = document.querySelector(".cta button");
  ctaButton.innerHTML = "Get Started";


//***** ----------main-content-------------*****//


//--------Main content h4-------------//
let topContentH4 = document.querySelectorAll('.text-content h4');
  topContentH4[0].innerHTML = siteContent["main-content"]["features-h4"];
  topContentH4[1].innerHTML = siteContent["main-content"]["about-h4"];
  topContentH4[2].innerHTML = siteContent["main-content"]["services-h4"];
  topContentH4[3].innerHTML = siteContent["main-content"]["product-h4"];
  topContentH4[4].innerHTML = siteContent["main-content"]["vision-h4"];


// ---------Main content P's---------//
let mainContentP = document.querySelectorAll(".text-content p");
  mainContentP[0].innerHTML = siteContent["main-content"]["features-content"];
  mainContentP[1].innerHTML = siteContent["main-content"]["about-content"];
  mainContentP[2].innerHTML = siteContent["main-content"]["services-content"];
  mainContentP[3].innerHTML = siteContent["main-content"]["product-content"];
  mainContentP[4].innerHTML = siteContent["main-content"]["vision-content"];


  //----- Main Content Middle Img------//
let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute('src', siteContent["main-content"] ["middle-img-src"]) ;


// *****-------- Contact -------******//

//---- Contact H4-----//
let contactH4 = document.querySelector('.contact h4') ;
  contactH4.textContent = siteContent["contact"]["contact-h4"];


  //------Contact P-----//
  let contactInfo = document.querySelectorAll(".contact p");
  contactInfo[0].innerHTML = "123 Way 456 Street<br> Somewhere, USA";
  contactInfo[1].innerHTML = "1 (888) 888-8888";
  contactInfo[2].innerHTML = "sales@greatidea.io";


// ******------ Footer ---------******//

let footer = document.querySelector ("footer") ;
  footer.textContent = siteContent['footer']['copyright'] ;


