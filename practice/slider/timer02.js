function timerStart() {
    console.log('%c timer running', 'color: blue')
    setTimeout(timer, 1000)
}

function timer() {
    console.log('%c timer running', 'color: red')
}

/////////////////////////////////////////////////////////////////////////
let timerCount = 0
let eleintervalTimer = document.getElementById('intervalTimer')

function timerStart02() {
    console.log('%c timer02 running', 'color: purple')
    setInterval(timer02, 100)
}

function timer02() {
    console.log('%c timer02 running', 'color: grey')
    eleintervalTimer.innerHTML = '<h1>' + timerCount++ + '</h1>'
}

////////////////////////////////////////////////////

let timerCount03 = 0

function timerStart03() {
    setInterval(timer03, 100)
}

function timer03() {
    let eleTimer03 = document.getElementById('timer03')
    eleTimer03.innerHTML = '<h1>' + timerCount03++ + '</h1>'
}

////////////////////////////////////////
function timerStart04() {
    setInterval(timer04, 100)
}

let countTimer04 = 0

function timer04() {
    let eleTimer04 = document.getElementById('timer04')

    eleTimer04.innerText = countTimer04++
}

//////////////////////////////////////////
let eleTimer05 = document.getElementById('timer05')
let countTimer05 = 0

function timerStart05() {
    setInterval(timer05, 100)
}

//字体的颜色用style color可以解决
function timer05() {
    eleTimer05.innerHTML = '<h1 style="color: red">' + countTimer05++ + '</h1>'
}

///////////////////////////////////////////////////////////
let imgs = [
    'https://i.ytimg.com/vi/-VRHxkHL1vs/maxresdefault.jpg',
    'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/cyberpunk_2077_cover.jpeg?itok=tP6zJFmM',
    'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/06/video-poster-en-0590f399.jpg',
    'https://dontfeedthegamers.com/wp-content/uploads/2017/11/Cyberpunk-2077.jpg',
    'https://i.redd.it/piq1yetakc311.jpg'
]
let imgCount = 0
let playing = true
const playText = '<i class="fas fa-pause"></i>' //这里因为是string类型，所以要加引号
const pauseText = '<i class="fas fa-play"></i>'
let intervalSlider = null
let eleSliders = document.getElementById('sliders')
let eleplayorpause = document.getElementById('playorpause')
const indicatorID = 'xbtn'


eleSliders.setAttribute('src', imgs[0])

// firstImg()
// function firstImg(){
//     let btn = document.getElementById(indicatorID + imgCount)
//     btn.setAttribute('class', 'dot highlightDot')
// }


function moveSliders() {
    if (playing) {
        let index = ++imgCount % imgs.length //此处++放在前面，第一张图片就不会显示2次，因为起始图片是第一张图片
        eleSliders.setAttribute('src', imgs[index])
        let btn = document.getElementById(indicatorID + index)
        clearIndicatorSign()
        btn.setAttribute('class', 'dot highlightDot') //这里可以有2个class，后者会覆盖前者
    }
}

intervalSlider = setInterval(moveSliders, 3000)

/////////////////////////////////////// How to relate between imgs and buttons?
function onClickImgs(xxx) {    //这里xxx是形式参数，这样下面在执行这个onclick事件的时候，"this"参数才能传回来
    //但是我不懂的是，为什么这里的函数下面引用了，还会显示unused?
    console.log(xxx)
    console.log(xxx.getAttribute('data-btn'))
    // 这里拿出来的是string，还要转换类型
    let index = parseInt(xxx.getAttribute('data-btn'), 10)
    let imgIndex = imgs[index]
    clearIndicatorSign()
    eleSliders.setAttribute('src', imgIndex)
    let btn = document.getElementById(indicatorID + index)
    btn.setAttribute('class', 'dot highlightDot')

    //这里的逻辑是当图片在显示的时候，图片的显示编号会匹配下面onclik事件点击的是那个图片就显示哪个图片，
    //因为函数onClickImgs（this）传回的参数是与button匹配的图片，由于在属性里加入了"data-btn"，所以取回的时候就是那个匹配的编号
}

//函数createIndicators是需要引用的，因为不引用就不会生产button，但是上面的函数不需要引用，引用会出错，它在下面的语句里引用了
createIndicators()
function createIndicators() {
    let eleIndicator = document.getElementById('indicator')
    //用for循环来根据图片的数量生产button的数量
    for (let i = 0; i < imgs.length; i++) { //这里注意不能用i <= imgs.length
        let btn = document.createElement('button')  //动态创建一个button，注意这个button是内存里的，还不会显示在任何界面
        btn.setAttribute('data-btn', i) //这行是添加一个btn的属性，和显示每张图片的数组编号相同
        btn.setAttribute('onclick', 'onClickImgs(this)') //这里的value一定要''起来，为什么？
        //这行的目的是给btn设定一个事件，就是onclick，并且这个事件是另外一个函数，通过点击自己传递给function onClickimgs()
        eleIndicator.appendChild(btn)
        btn.setAttribute('id', indicatorID + i)
        btn.setAttribute('class', 'dot')
    }
}


//////////////////////////////////////////////
//onclick事件的函数都不需要引用，因为是在网页里触发的
function playOrPause() {

    playing = !playing
    eleplayorpause.innerHTML = playing ? playText : pauseText
}

//以下这种方式是通过clearInterval来实现
function playOrPause2() {
    if (intervalSlider) {
        clearInterval(intervalSlider)
        intervalSlider = null
        eleplayorpause.innerHTML = pauseText
    } else {
        intervalSlider = setInterval(moveSliders, 3000)
        eleplayorpause.innerHTML = playText
    }
}

////////////////////////////////////////////////
/*下一步的问题是当我们点击某一个indicator的时候，更改这个indicator的样式，
那么应该就是在createIndicators这个函数里面去更改，那么要去更改它，就必须先控制它，
控制它最好的方法就是抓取id，如果没有，我们就创建id,第99行*/
/*加了id这个属性后，我们就可以在定时器的函数moveSlider里去控制这个button，就是indicator */

//最后一步就是要恢复indicator原有的样式,是通过先保持原有样式，再采用新样式，
// 所以下面的函数一定要在77行的上面执行！！
//
function clearIndicatorSign() {
    for (let i = 0; i < imgs.length; i++) {
        let btn = document.getElementById(indicatorID + i)
        btn.setAttribute('class', 'dot')
    }
}

//////////////////////////////////////
movePausebtnToEnd()

function movePausebtnToEnd() {
    let node = document.getElementById('playorpause')
    let list = document.getElementById('indicator')
    list.insertBefore(node, null)  //or (node, lastChild[length-1])
}

/////////////////////////////////////
arrowRightToEnd()

function arrowRightToEnd() {
    let node = document.getElementById('arrowRight')
    let list = document.getElementById('indicator')
    list.insertBefore(node, null)
}

///////////////////////////////////////
//Adding previous & next button:
function moveImgs(xxx) {
    if (xxx === 'next') {
        clearIndicatorSign()
        let index1 = ++imgCount % imgs.length
        eleSliders.setAttribute('src', imgs[index1])
        let btn1 = document.getElementById(indicatorID + index1)
        btn1.setAttribute('class', 'dot highlightDot')
    } else if (xxx === 'prev') { //点击的第一下不起作用？怎么改进？
        clearIndicatorSign()
        let index2 = imgCount-- % imgs.length
        eleSliders.setAttribute('src', imgs[index2])
        if (imgCount < 0) {
            imgCount = imgs.length - 1
        }
        let btn2 = document.getElementById(indicatorID + index2)
        btn2.setAttribute('class', 'dot highlightDot')
    }
}








