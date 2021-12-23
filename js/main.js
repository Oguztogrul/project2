var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2000
    },

    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});



const picsnone = document.querySelector(".picsnone")
const pics = document.querySelector(".pics")
const seemorebtn = document.querySelector(".displaybtn")

seemorebtn.addEventListener("click", () => {

    if (picsnone.style.display === "flex") {
        seemorebtn.innerHTML = "See More";
        picsnone.style.display = "none";
    } else {
        seemorebtn.innerHTML = "See Less";
        picsnone.style.display = "flex";
    }
})

const logoshow = document.querySelector(".logoshow")
const logos = document.querySelector(".logos")
const partnersBtn = document.querySelector(".partners_btn")

partnersBtn.addEventListener("click", () => {
    logoshow.style.display = "flex";
    logos.style.display = "none";
    partnersBtn.style.display = "none"

})


let newList = []
axios.get("https://oguz-fe9a7-default-rtdb.firebaseio.com/features.json")
    .then(response => response.data).then(data => {
        for (let key in data) {
            newList.push(data[key])
        }
        newList.map(item => {
            console.log("bura baxin", item)
            let apibox = document.querySelector(".apibox")
            apibox.innerHTML +=
                `
                <div class="apibox_down apib">
                <div class="pictext">
                    <figure>
                        <img src=${item.image} alt=""/>
                    </figure>
                    <h4>${item.title}</h4>
                </div>
                <p>${item.description}</p>
            </div>           
          `
        })
    })
    .catch(err => console.log(err))
setTimeout(() => {}, 3000)





let newListTe = []
axios.get("https://oguz-fe9a7-default-rtdb.firebaseio.com/testimonials.json")
    .then(response => response.data).then(data => {
        for (let key in data) {
            newListTe.push(data[key])
        }
        newListTe.map(item => {
            console.log("bura baxin", item)
            let testigroup = document.querySelector(".testigroup")
            testigroup.innerHTML +=
                `
               
                <div class="testi">
                <div class=titletrio>
                <figure> <img src=${item.image} alt=""/></figure>
                <div class="titledual">
                <h2>${item.title}</h2>
                <h3>${item.description}</h3>
                </div>
                </div>
                <p>${item.text}</p>
                </div>   
            
        
          `
        })
    })
    .catch(err => console.log(err))
setTimeout(() => {}, 3000)


let toggler = document.querySelector(".toggler")
let togglermenu = document.querySelector(".toggler_menu")

toggler.addEventListener("click", () => {
    togglermenu.classList.toggle("toggler_menu_show")
})