let cube = document.querySelector(".image-cube");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let playBtn = document.getElementById("play");

let pos = 0;

nextBtn.addEventListener('click', () => {
  pos -= 90
  cube.style.transform = `rotateY(${pos}deg)`
})

prevBtn.addEventListener('click', () => {
  pos += 90
  cube.style.transform = `rotateY(${pos}deg)`
})


let interval = 0

playBtn.addEventListener('click', () => {
    interval = setInterval(() => {
        pos -= 90
        cube.style.transform = `rotateY(${pos}deg)`
    }, 1000)
    
})


document.getElementById("pause").addEventListener('click', pauseSlider)

function pauseSlider(){
    return clearInterval(interval)
}