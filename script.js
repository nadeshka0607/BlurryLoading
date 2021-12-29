const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30) // добавляємо інтервал (назва функції, як часто її викликати у мілісекундах)

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int) // видаляємо інтервал щоб не відкривалася більше функція
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0) // прозорість load текста. Opacity від 0 до 1 (наприклад 0.93).
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` // blur картинки позаду
}

const scale = (num, in_min, in_max, out_min, out_max) => { // (цифра з якою працюємо, мінімальне значення яке приймаємо, максимальне значення яке приймаємо, мінімальне значення яке очікуємо, максимальне значення яке очікуємо)
    // console.log(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min);
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}