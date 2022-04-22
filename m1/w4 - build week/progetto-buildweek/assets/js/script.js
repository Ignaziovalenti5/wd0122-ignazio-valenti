// SLIDER ___________________________________________________________________


let slider = document.querySelector('#slider')
let sliderImg = document.querySelector('.slider-img')
let width = -(sliderImg.width)

let margin = 0
let currentMargin = 0

if (screen.width < 480) {
    fineSlider = width * 7
}
if (screen.width > 479) {
    width += 40
    fineSlider = width * 6
}
if (screen.width > 769) {
    width -= 10
    fineSlider = width * 5
}
if (screen.width > 979) {
    width -= 30
    fineSlider = width * 4
}

//su chrome funziona su safari no

function forward() {
    slider.style.marginLeft = currentMargin + width + 'px'
    currentMargin = eval((slider.style.marginLeft).replace('px', ''))

    if (currentMargin < fineSlider) {
        slider.style.marginLeft = 0 + 'px'
        currentMargin = 0
    }

    var x = currentMargin / width
    cambiaColore(x)

}

function getImg(x) {
    slider.style.marginLeft = width * x + 'px'
    currentMargin = eval((slider.style.marginLeft).replace('px', ''))
    console.log(currentMargin);

    cambiaColore(x)
}

function cambiaColore(i) {
    document.querySelector(".dot.active").classList.remove("active")
    document.getElementsByClassName("dot")[i].classList.add("active")
}


/* ------- ANIMAZIONI GENERALI ------ */

window.addEventListener("scroll", function (e) {
    var animazioneGenerale = this.scrollY
    var s1 = document.querySelector(".about-us").offsetTop - 800;
    // console.log(s1)
    var s2 = document.querySelector("#blog").offsetTop - 800;
    var s3 = document.querySelector("#menu").offsetTop - 800;
    var s4 = document.querySelector("#newsletter").offsetTop - 800;
    var s5 = document.querySelector("#separazione").offsetTop - 800;
    var s6 = document.querySelector(".bottone3").offsetTop - 800;


    // if (animazioneGenerale < s1) {
    //     // document.getElementsByClassName("animaz")[0].classList.remove("animaz")
    //     document.querySelector(".imgabout").classList.add("animaz-davide1")
    //     document.querySelector(".titoloabout").classList.add("animaz-davide1")
    //     document.querySelector(".pabout").classList.add("animaz-davide1")


    // }
    if (animazioneGenerale >= s1) {
        document.querySelector(".imgabout").classList.add("animaz-davide1")
        document.querySelector(".titoloabout").classList.add("animaz-davide11")
        document.querySelector(".pabout").classList.add("animaz-davide11")
    }
    if (animazioneGenerale >= s2) {
        document.getElementsByClassName("articles")[0].classList.add("animaz-davide2")
        document.getElementsByClassName("articles")[1].classList.add("animaz-davide21")
        document.getElementsByClassName("articles")[2].classList.add("animaz-davide22")
        document.getElementsByClassName("articles")[3].classList.add("animaz-davide23")
        document.getElementsByClassName("articles")[4].classList.add("animaz-davide24")
        document.getElementsByClassName("articles")[5].classList.add("animaz-davide12")
        document.querySelector("#more-info").classList.add("animaz-davide31")

    }
    if (animazioneGenerale >= s3) {
        document.querySelector("#menu-titolo").classList.add("animaz-davide1")
        document.querySelector("#menu-prezzi-titolo").classList.add("animaz-davide12")
        document.querySelector("#tutte-pietanze").classList.add("animaz-davide12")
        document.querySelector(".bottone2").classList.add("animaz-davide31")
    }
    if (animazioneGenerale >= s4) {
        document.querySelector(".titolo-news").classList.add("animaz-davide1")
        document.querySelector(".hr-news").classList.add("animaz-davide1")
        document.querySelector("#scrivete").classList.add("animaz-davide11")

    }
    if (animazioneGenerale >= s5) {
        document.querySelector(".contact-us").classList.add("animaz-davide1")
        document.querySelector("#fname").classList.add("animaz-davide13")
        document.querySelector("#contattate").classList.add("animaz-davide2")
        document.querySelector("#mailaddress").classList.add("animaz-davide14")
        document.querySelector("#recensione").classList.add("animaz-davide15")
        document.querySelector(".bottone3").classList.add("animaz-davide31")
        document.querySelector("#hrrr").classList.add("animaz-davide1")
    }
    if (animazioneGenerale >= s6) {
        document.querySelector("#contact-info").classList.add("animaz-davide2")
        document.querySelector("#blog-posts").classList.add("animaz-davide21")
        document.querySelector("#stream-us").classList.add("animaz-davide22")

    }


}
)