const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const milliseconds = document.querySelector('.milliseconds')
const controls = document.querySelector('.controls')
const controlButtons = controls.children
const [reset, stop, start] = controlButtons



function intervalDisplay() {
     milliseconds.textContent = parseInt(milliseconds.textContent) + 1
     if(milliseconds.textContent == 100) {
         milliseconds.textContent = 0
         seconds.textContent = parseInt(seconds.textContent) + 1
     }
     if(seconds.textContent == 60) {
         seconds.textContent = 0
         minutes.textContent = parseInt(minutes.textContent) + 1
     }
}


let timerId
window.addEventListener('load', () => {
    seconds.textContent = 0
    minutes.textContent = 0
    milliseconds.textContent = 0
})

start.addEventListener('click', () => {
    timerId = setInterval(intervalDisplay, 1)
    intervalDisplay()
})

stop.addEventListener('click', () => {
    clearInterval(timerId)
})

reset.addEventListener('click', () => {
    clearInterval(timerId)
    seconds.textContent = 0
    minutes.textContent = 0
    milliseconds.textContent = 0    
})











