let img = watermark('watewave')
let $div = document.querySelector('.watermark') as HTMLDivElement
$div.style.backgroundImage = `url(${img}`
let $img = document.querySelector('.img') as HTMLImageElement
$img.src = img