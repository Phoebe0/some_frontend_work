let pic_1 = document.querySelector('.pic_1')
let pic_2 = document.querySelector('.pic_2')
let pic_3 = document.querySelector('.pic_3')

let show_pic_1 = document.querySelector('.show_pic_1')
let show_pic_2 = document.querySelector('.show_pic_2')
let show_pic_3 = document.querySelector('.show_pic_3')
// 默认 2 和 3隐藏
pic_2.style.display = 'none' // 不占位隐藏
pic_3.style.display = 'none'
// 点击按钮，显示不同图片
let p1 = 0,
  p2 = 0,
  p3 = 0

show_pic_1.addEventListener('mousemove', () => {
  pic_1.style.display = 'block'
  pic_2.style.display = 'none'
  pic_3.style.display = 'none'
})
show_pic_2.addEventListener('mousemove', () => {
  pic_1.style.display = 'none'
  pic_2.style.display = 'block'
  pic_3.style.display = 'none'
})

show_pic_3.addEventListener('mousemove', () => {
  pic_1.style.display = 'none'
  pic_2.style.display = 'none'
  pic_3.style.display = 'block'
})
