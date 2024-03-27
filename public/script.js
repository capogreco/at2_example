document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)

function resize_canvas () {
   cnv.width = innerWidth
   cnv.height = innerHeight
}

resize_canvas ()

window.onresize = resize_canvas

const ctx = cnv.getContext (`2d`)

let x_pos = -100

const draw_frame = () => {
   ctx.fillStyle = `turquoise` // fill (`turquoise`)
   ctx.fillRect (0, 0, innerWidth, innerHeight)
   
   ctx.fillStyle = `hotpink`
   ctx.fillRect (x_pos, innerHeight / 2 - 50, 100, 100)

   x_pos += 1

   if (x_pos > innerWidth) x_pos = -100

   requestAnimationFrame (draw_frame)
}

draw_frame ()

