let img = waterwave('watewave')
let $div = document.querySelector('.waterwave') as HTMLDivElement
$div.style.backgroundImage = `url(${img}`
let $img = document.querySelector('.img') as HTMLImageElement
$img.src = img