const user_info = {
  name: 'xxx',
  age: 18,
  id: '2023xxxxxx',
  major: '网络与新媒体',
}

/**
 * 展示用户信息的方法
 */
function showUserinfo() {
  // 展示用户名称
  document.querySelector('.user_name').innerHTML = user_info.name
  document.querySelector('.user_name1').innerHTML = '姓名：' + user_info.name
  document.querySelector('.user_id').innerHTML = '学号：' + user_info.id
  document.querySelector('.user_age').innerHTML = '年龄：' + user_info.age
  document.querySelector('.user_major').innerHTML = '专业：' + user_info.major
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

/**
 * 用户信息显示与隐藏
 */
let user_flag = 0
const dialog = document.querySelector('.dialog')
const user = document.querySelector('.user_info')
dialog.style.display = 'none'
function isShowUserInfo() {
  user_flag++
  // 判断弹框是否显示
  dialog.style.display = user_flag % 2 === 1 ? 'block' : 'none'

  console.log(user_flag)
}

showUserinfo()
banneCarousel()
