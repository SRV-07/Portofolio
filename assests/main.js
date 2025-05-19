const resumeTabs = document.querySelector(".resume-tabs");
const resumePortofolioTabBtns = resumeTabs.querySelectorAll(".tab-btn");
const resumeTabContents = document.querySelectorAll(".resume-tab-content")

let resumeTabNav = function(resumeTabClick){
      resumeTabContents.forEach((resumeTabContents) =>{
        resumeTabContents.style.display = "none";
        resumeTabContents.classList.remove("active");
      });

       resumePortofolioTabBtns.forEach((resumePortofolioTabBtn) =>{
        resumePortofolioTabBtn.classList.remove("active")
       });


    resumeTabContents[resumeTabClick].style.display = "flex";

    setTimeout(()=>{
        resumeTabContents[resumeTabClick].classList.add("active");
    }, 100);
    
    
    resumePortofolioTabBtns[resumeTabClick].classList.add("active");
}

resumePortofolioTabBtns.forEach((resumePortofolioTabBtns, i)=>{
    resumePortofolioTabBtns.addEventListener("click",()=>{
        resumeTabNav(i)
    });
});

// ==================service modal open/close function=======================
const serviceCardWithModals = document.querySelectorAll(".service-container .card-with-modal");

serviceCardWithModals.forEach((serviceCardWithModals) =>{
    const serviceCard = serviceCardWithModals.querySelector(".service-card");
    const serviceBackdrop = serviceCardWithModals.querySelector(".service-modal-backdrop");
    const modalCloseBtn = serviceCardWithModals.querySelector(".modal-close-btn");
    const serviceModal = serviceCardWithModals.querySelector(".service-modal");

    serviceCard.addEventListener("click",() =>{
        serviceBackdrop.style.display = "flex";

        setTimeout(() =>{
            serviceBackdrop.classList.add("active");
        }, 100);

        setTimeout(() =>{
            serviceModal.classList.add("active");
        }, 300);
    })

    modalCloseBtn.addEventListener("click", () =>{
        setTimeout(() =>{
            serviceBackdrop.style.display = "none";
        }, 500);

        setTimeout(() =>{
            serviceBackdrop.classList.remove("active");
            serviceModal.classList.remove("active");
        }, 100);
      
    });
});

//=================== filter portfolio card acc to portfolio tabs 
document.addEventListener("DOMContentLoaded", ()=>{
    const portfolioTabs = document.querySelector(".portfolio-tabs");
    const portfolioTabBtns = portfolioTabs.querySelectorAll(".tab-btn");
    const CardWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

    portfolioTabBtns.forEach((tabBtn) =>{
        tabBtn.addEventListener("click", ()=>{
            const filter = tabBtn.getAttribute("data-filter");

            CardWithModals.forEach((cardWithModal) =>{
                if(filter === "all" || cardWithModal.classList.contains(filter)){
                    cardWithModal.style.opacity = "1";
                    cardWithModal.classList.remove("hidden");
                   
                    setTimeout(() =>{
                        cardWithModal.style.opacity = "1";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);
                }
                else{
                    cardWithModal.classList.add("hidden");

                    setTimeout(() =>{
                        cardWithModal.style.opacity = "0";
                        cardWithModal.style.transition = ".5s ease";
                    }, 1);
                }
            });

            //Add active class to the clicked tab button.
            portfolioTabBtns.forEach((tabBtn) => tabBtn.classList.remove("active"));
            tabBtn.classList.add("active");
        });
    });
});

//=========================open/close portfolio modals.============
const portfolioCardsWithModals = document.querySelectorAll(".portfolio-container .card-with-modal");

portfolioCardsWithModals.forEach((portfolioCardsWithModal) =>{
    const portfolioCard = portfolioCardsWithModal.querySelector(".portfolio-card");
    const portfolioBackdrop = portfolioCardsWithModal.querySelector(".portfolio-modal-backdrop");
    const portfolioModal = portfolioCardsWithModal.querySelector(".portfolio-modal");
    const modalCloseBtn = portfolioCardsWithModal.querySelector(".modal-close-btn");

    portfolioCard.addEventListener("click", ()=>{
        portfolioBackdrop.style.display = "flex";

        setTimeout(() =>{
            portfolioBackdrop.classList.add("active");
        }, 300);

        setTimeout(() =>{
            portfolioModal.classList.add("active");
        }, 300);
   });

   modalCloseBtn.addEventListener("click", ()=>{
       setTimeout(() =>{
           portfolioBackdrop.style.display ="none";
        },500);
     setTimeout(()=>{
    portfolioBackdrop.classList.remove("active");
    portfolioModal.classList.remove("active");
   }, 100)

   })
    });

    // ======================== testamonial swiper =================>
        var swiper = new Swiper(".srv-client-swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
      
/*============================= send/recieve email from contact form===================  */

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "8g8r-PCpQUMt1VSe_",
    });
})();

srvContactForm = document.getElementById("srv-contact-form")
srvContactFormAlert = document.querySelector(".contact-form-alert")

srvContactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // these IDs from the previous steps
    emailjs.sendForm('service_pitri8o', 'template_08lk6tc', '#srv-contact-form')
        .then(() => {
            // console.log('SUCCESS!');
            srvContactFormAlert.innerHTML = "<span>Your message sent successfully </span> <i class='ri-checkbox-circle-line'></i>";
            srvContactForm.reset();

            setTimeout(() =>{
                srvContactFormAlert.innerHTML ="";
            }, 5000);
        }, (error) => {
            // console.log('FAILED...', error);
            srvContactFormAlert.innerHTML = "<span>Message not sent</span> <i class='ri-checkbox-circle-line'></i>";
             srvContactFormAlert.title = error;
        });
});

// shrink the height of the header scroll 

window.addEventListener("scroll", () =>{
    const srvHeader = document.querySelector(".srv-header");

    srvHeader.classList.toggle("shrink", window.scrollY > 0)
});

// each bottom navigation menu items active on page scroll

window.addEventListener("scroll", () =>{
    const navMenuSections = document.querySelector(".nav-menu-section");
    const scrollY = window.pageYOffset;

    navMenuSections.forEach((navMenuSection) =>{
        let sectionHeight = navMenuSection.OffsetHeight;
        let sectionTop = navMenuSection.OffsetTop - 50;
        let id = navMenuSection.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.add("current");
        }else{
            document.querySelector(".bottom-nav .menu li a[href*=" + id + "]").classList.remove("current");
        }
    })
})

// javscript to show bottom navigation menu on home(page load)

window.addEventListener("DOMContentLoaded", () =>{
    const bottomNav = document.querySelector(".bottom-nav");
    bottomNav.classList.toggle("active", window.scrollY < 10);
})

// javscript to show/hide bottom navigation menu on(scroll) 
const bottomNav = document.querySelector(".bottom-nav");
const menuHideBtn = document.querySelector(".menu-hide-btn");
const menuShowBtn = document.querySelector(".menu-show-btn");
var navTimeout;


window.addEventListener("scroll", () =>{
    bottomNav.classList.add("active");
    menuShowBtn.classList.remove("active")

    if(window.scrollY < 10){
      menuHideBtn.classList.remove("active");

        function scrollStopped(){
            bottomNav.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }

    if(window.scrollY > 10){
      menuHideBtn.classList.add("active");


        function scrollStopped(){
            bottomNav.classList.remove("active");
            menuShowBtn.classList.add("active");
        }

        clearTimeout(navTimeout);
        navTimeout = setTimeout(scrollStopped, 2500);
    }
});


// hide bottom navigation menu on click menu-hide-btn 
menuHideBtn.addEventListener("click", () =>{
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.toggle("active");
    menuShowBtn.classList.toggle("active");
}); 

//show bottom navigation menu on click menu-show-btn
menuShowBtn.addEventListener("click", () =>{
    bottomNav.classList.toggle("active");
    menuHideBtn.classList.add("active");
    menuShowBtn.classList.toggle("active");
});


//  to top-button with scroll indicator bar 
window.addEventListener("scroll", ()=>{
    const toTopBtn = document.querySelector(".to-top-btn");

    toTopBtn.classList.toggle("active", window.scrollY > 0);

    //scroll indicator bar
    const scrollIndicatorBar = document.querySelector(".scroll-indicator-bar");
    const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollValue = (pageScroll / height)* 100;
    scrollIndicatorBar.style.height = scrollValue + "%";
})

//   customized cursor on mousemove 
const cursor = document.querySelector(".cursor");
const cursorDot = cursor.querySelector(".cursor-dot");
const cursorCircle = cursor.querySelector(".cursor-circle");

document.addEventListener("mousemove", (e)=>{
    let x = e.clientX;
    let y = e.clientY;

    cursorDot.style.top = y + "px";
    cursorDot.style.left = x + "px";
    cursorCircle.style.top = y + "px";
    cursorCircle.style.left = x + "px";
})


//cursor effect on hover website element

const cursorHoverLink = document.querySelectorAll("body a, .portfolio-card, .swiper-button-next, .swiper-button-prev, .swiper-pagination-bullet, .service-card, .contact-social-links li, .contact-form .submit-btn, .menu-show-btn, .menu-hide-btn")

cursorHoverLink.forEach((cursorHoverLink)=>{
    cursorHoverLink.addEventListener("mouseover", ()=>{
        cursorDot.classList.add("large");
        cursorCircle.style.display = "block"
    })
})

// change theme and save current theme on click 

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", ()=>{
    themeBtn.classList.toggle("active-sun-icon");
    document.body.classList.toggle("light-theme")

    //save theme icon and them button on click
    const getCurrentIcon = () => themeBtn.classList.contains("active-sun-icon")? "sun" : "moon";
    const getCurrentTheme = () => document.body.classList.contains("light-theme")? "light" : "dark";

    localStorage.setItem("srv-saved-icon", getCurrentIcon());
    localStorage.setItem("srv-saved-theme", getCurrentTheme());
})


// scroll reveal 

ScrollReveal({ 
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 400
 });



// target Element and specify Option to create reveal Animation.
 ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
 ScrollReveal().reveal('.avatar-info .section-title', { delay: 300, origin: 'top' });
 ScrollReveal().reveal('.home-social, .home-scroll-btn', { delay: 600, origin: 'bottom' });
 ScrollReveal().reveal('.about-img', { delay: 700, origin: 'top' });
 ScrollReveal().reveal('.about-info, .srv-footer, .srv-logo', { delay: 300, origin: 'bottom' });
 ScrollReveal().reveal('.pro-card .about-buttons .srv-main-btn, .resume-tabs, .tab-btn, .portfolio-tabs, .tab-btn', { delay: 600, origin: 'bottom' });
 ScrollReveal().reveal('#resume .section-content', { delay: 700, origin: 'bottom' });
 ScrollReveal().reveal('.service-card, .portfolio-card, .contact-item', { delay: 300, origin: 'bottom', interval: 300 });
 ScrollReveal().reveal('.srv-client-swiper, .contact-form-body', { delay: 700, origin: 'right' });
 ScrollReveal().reveal('.contact-info h3', { delay: 100, origin: 'bottom', interval: 300 });

  


