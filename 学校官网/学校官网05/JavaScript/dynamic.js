var index = 1,
  timer

function init() {
  eventBind()
  autoPlay()
}
init()
function autoPlay() {
  timer = setInterval(function () {
    animation(-1200)
    dotIndex(true)
  }, 3000)
}
function stopAutoPlay() {
  clearInterval(timer)
}
function dotIndex(add) {
  if (add) {
    index++
  } else {
    index--
  }
  if (index > 3) {
    index = 1
  }
  if (index < 1) {
    index = 3
  }
  dotActive()
}
function dotActive() {
  var dots = document.getElementsByClassName('dot')
  var len = dots.length
  for (var i = 0; i < len; i++) {
    dots[i].className = 'dot'
  }

  for (var i = 0; i < len; i++) {
    /*此处可以不用parseInt，当不用全等时*/
    if (index === parseInt(dots[i].getAttribute('index'))) {
      dots[i].className = 'dot active'
    }
  }
}
/**
 * 轮播图 点的点击事件
 */
function eventBind() {
  var dots = document.getElementsByClassName('dot')
  var len = dots.length
  console.log(len)
  for (var i = 0; i < len; i++) {
    ;(function (j) {
      dots[j].onclick = function (e) {
        var ind = parseInt(dots[j].getAttribute('index'))
        animation((index - ind) * -1200) /*显示点击的图片*/
        index = ind
        dotActive()
      }
    })(i)
  }
  /**
   * 容器的hover事件
   */
  var con = document.getElementsByClassName('container')[0]
  /*鼠标移动到容器上时，停止制动滑动，离开时继续滚动*/
  con.onmouseover = function (e) {
    stopAutoPlay()
  }
  con.onmouseout = function (e) {
    autoPlay()
  }
  /*箭头事件的绑定*/
  var pre = document.getElementsByClassName('pre')[0]
  var next = document.getElementsByClassName('next')[0]
  pre.onclick = function (e) {
    dotIndex(false)
    animation(1200)
  }
  next.onclick = function (e) {
    dotIndex(true)
    animation(-1200)
  }
}
/***
 * 展示时间
 */
function animation(offset) {
  var lists = document.getElementsByClassName('list')[0]
  var left =
    parseInt(lists.style.left.slice(0, lists.style.left.indexOf('p'))) + offset
  if (left < -6000) {
    lists.style.left = '-1200px'
  } else if (left > -1200) {
    lists.style.left = '-6000px'
  } else {
    lists.style.left = left + 'px'
  }
}
function showTime() {
  var time = new Date() //获取当前系统的时间
  var y = time.getFullYear() //获得4位的年
  var m = time.getMonth() + 1 //月份（0-11）
  var l = m < 10 ? '0' + m : m //将得到的月份数中小于10的月份表示为两位（01,02）
  var d = time.getDate() > 10 ? time.getDate() : '0' + time.getDate() //得到天数
  var h = time.getHours() //获得小时数
  var s2 = time.getMinutes() //分钟数
  var s1 = s2 < 10 ? '0' + s2 : s2
  var s = time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds() //将秒数小于10的处理为两位
  //alert(time);
  //alert(y+m+d+h+s1+s);
  var t = y + '-' + l + '-' + d + ' ' + h + ':' + s1 + ':' + s //格式得到的系统时间
  var b = document.getElementById('div1') //根据id获取页面上的一个元素对象
  b.innerHTML = '<font >' + t + '</font>' //将格式化的时间写到div中
  setTimeout(showTime, 1000) //动态更新时间
}
showTime()
