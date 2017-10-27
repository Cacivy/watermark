const watermark = (value: string) => {
  let canvas = document.createElement('canvas')
  canvas.width = 300
  canvas.height = 200
  let ctx = canvas.getContext('2d')
  ctx.font = '20px microsoft yahei'
  ctx.fillStyle = '#abc'
  ctx.rotate(40*Math.PI/180);
  ctx.fillText(value, 50, 20, 150)
  let now = new Date()
  let date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
  ctx.fillText(date.toLocaleString(), 50, 50, 150)
  return canvas.toDataURL()
}