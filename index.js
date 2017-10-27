var img = watermark('watewave');
var $div = document.querySelector('.watermark');
$div.style.backgroundImage = "url(" + img;
var $img = document.querySelector('.img');
$img.src = img;
