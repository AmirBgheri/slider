const fig = document.querySelectorAll('.slider figure')
const slider = document.querySelector('.slider')
const icon = document.querySelector('.imgicon')
const l = document.querySelector('.left')
const r = document.querySelector('.right')
let temp=0
h = slider.clientHeight 

fig.forEach((val , i) => {
    val.style.height=h+'px'

    let li = document.createElement('li')
    li.innerHTML = `
        <img src=${val.children[0].src}>
    `
    icon.appendChild(li)
});

const li = document.querySelectorAll('.imgicon li')
// console.log(li);
li.forEach((val , i) => {
    val.addEventListener('click', () => {
        temp = i
        slider.style.top = -(temp * h) + 'px'
        
        // li.forEach((item) => {
        //     item.style.filter = 'grayscale(1)'
        // })
        // val.style.border = '2px solid red'
    })

});
//   slider.style.height = ((fig.length) * h) + 'px'
r.addEventListener('click', () => {
    if (temp < fig.length - 1) {
        temp++
    } else {
        temp = 0
    }
    slider.style.top = -(temp * h) + 'px'
})

l.addEventListener('click', () => {
    if (temp !=0) {
        temp--
    } else {
        temp = fig.length - 1
    }
    slider.style.top = -(temp * h) + 'px'
})