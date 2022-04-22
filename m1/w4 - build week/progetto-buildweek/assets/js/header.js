
function sale() {
    document.querySelector('#tendina').classList.toggle("open-sale")


}

window.addEventListener("scroll", function (e) {
    var actscor = this.scrollY
    var s1 = document.querySelector(".about-us").offsetTop - 300;
    // console.log(s1)
    var s2 = document.querySelector("#blog").offsetTop - 300;
    var s3 = document.querySelector("#menu").offsetTop - 300;
    var s4 = document.querySelector("#newsletter").offsetTop - 300;
    var s5 = document.querySelector("#separazione").offsetTop - 300;


    if (actscor < s1) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[0].classList.add("sandra")
    }
    if (actscor >= s1) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[1].classList.add("sandra")
    }
    if (actscor >= s2) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[2].classList.add("sandra")
    }
    if (actscor >= s3) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[3].classList.add("sandra")
    }
    if (actscor >= s4) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[4].classList.add("sandra")
    }
    if (actscor >= s5) {
        document.getElementsByClassName("sandra")[0].classList.remove("sandra")
        document.getElementsByClassName("brie")[5].classList.add("sandra")
    }
})

window.addEventListener("scroll", function (e) {
    var actscor = this.scrollY
    var s1 = document.querySelector(".about-us").offsetTop - 250;
    // console.log(s1)
    var s2 = document.querySelector("#blog").offsetTop - 250;
    var s3 = document.querySelector("#menu").offsetTop - 250;
    var s4 = document.querySelector("#newsletter").offsetTop - 250;
    var s5 = document.querySelector("#separazione").offsetTop - 250;


    if (actscor < s1) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[0].classList.add("sandra2")
    }
    if (actscor >= s1) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[1].classList.add("sandra2")
    }
    if (actscor >= s2) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[2].classList.add("sandra2")
    }
    if (actscor >= s3) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[3].classList.add("sandra2")
    }
    if (actscor >= s4) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[4].classList.add("sandra2")
    }
    if (actscor >= s5) {
        document.getElementsByClassName("sandra2")[0].classList.remove("sandra2")
        document.getElementsByClassName("speck")[5].classList.add("sandra2")
    }
})