let codeImg = document.querySelector('.er_code')
let flag = 0
codeImg.style.display = 'none'
/***
 * 控制二维码弹出的方法
 */
function isErCodeShow() {
  flag++
  console.log(flag)
  if (flag % 2 === 0) {
    codeImg.style.display = 'none'
  } else {
    codeImg.style.display = 'block'
  }
}
/***
 * banner图轮播的方法
 */
function banneCarousel() {
  // index：索引， len：长度
  let index = 0,
    len
  // 类似获取一个元素数组
  let imgBox = document.getElementsByClassName('img-slide')
  len = imgBox.length
  imgBox[index].style.display = 'block'
  // 逻辑控制函数
  function slideShow() {
    index++
    // 防止数组溢出
    if (index >= len) index = 0
    // 遍历每一个元素
    for (let i = 0; i < len; i++) {
      imgBox[i].style.display = 'none'
    }
    // 每次只有一张图片显示
    imgBox[index].style.display = 'block'
  }

  // 定时器，间隔3s切换图片
  setInterval(slideShow, 2000)
}

banneCarousel()
