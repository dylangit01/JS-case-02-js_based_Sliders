
let count = 0
let playing = true
let eleTimer = document.getElementById('timer')
function onStart() {
    console.log('%c timer running1', 'color: blue')
    // setTimeout(function () {
    //     console.log('%c timer running', 'color: red')
    // }, 1* 1000)

   setInterval(function () {
       console.log('%c timer running', 'color: red')
       eleTimer.innerHTML = '<h1>' + count++ + '</h1>'
   }, 100)
}

let imgs = [
    'https://i.ytimg.com/vi/-VRHxkHL1vs/maxresdefault.jpg',
    'https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/cyberpunk_2077_cover.jpeg?itok=tP6zJFmM',
    'https://ksassets.timeincuk.net/wp/uploads/sites/54/2019/06/video-poster-en-0590f399.jpg',
    'https://dontfeedthegamers.com/wp-content/uploads/2017/11/Cyberpunk-2077.jpg',
    'https://i.ytimg.com/vi/aiE8U89ctD8/maxresdefault.jpg'
]

let imgCount = 0
let eleImage = document.getElementById('images')
    eleImage.setAttribute('src',imgs[0])
let intervalSliderID = null
const indicatorIDs = 'xbtn'


function moveSlider() {
    let index = imgCount++ % imgs.length
    if (playing) {
        eleImage.setAttribute('src', imgs[index])
        // let btn = document.getElementById(indicatorIDs + imgCount++) //这里不能这么写，因为会无限➕下去，所以可以提前先用变量定义好
        let btn = document.getElementById(indicatorIDs + index)
        clearHiglightDot()
        btn.setAttribute('class', 'dot highlightDot') //这里可以有2个class，css最下面的属性会覆盖上面的，其它的不变
    }
}
intervalSliderID = setInterval(moveSlider, 1000)

function clearHiglightDot() {
    for (let i = 0; i < imgs.length; i++) {
        let btn = document.getElementById(indicatorIDs + i)
        btn.setAttribute('class', 'dot')
    }
}

function clickImage(xxx){
   let index = parseInt (xxx.getAttribute('data-btn'), 10)
    let img = imgs[index]
    eleImage.setAttribute('src',img)
}

createIndicators()
function createIndicators() {
    let eleindicator = document.getElementById('indicator')
    for (i = 0; i < imgs.length; i++) {
        let btn = document.createElement('button')
        btn.setAttribute('data-btn', i)
        btn.setAttribute('id', 'xbtn' + i)
        btn.setAttribute('onclick', 'clickImage(this)')
        btn.setAttribute('class', 'dot')
        eleindicator.appendChild(btn)
    }
}
let btnPauseOrPlay = document.getElementById('pauseorplay')
const textPause = '<i class="fas fa-play"></i>'
const textPlay = '<i class="fas fa-pause"></i>'

// function pauseOrPlay() {
//     playing = !playing
//     btnPauseOrPlay.innerHTML = playing ? textPause : textPlay
// }

function pauseOrPlay2() {
    if (intervalSliderID){  //if语句的意思是如果ID存在，那么就清空，但是清空后要主动赋值null给它，以防别人再使用的时候不知道是否被清空了
        clearInterval(intervalSliderID)
        intervalSliderID = null
        btnPauseOrPlay.innerHTML = textPause
    } else {
        intervalSliderID = setInterval(moveSlider, 1000)
        btnPauseOrPlay.innerHTML = textPlay
    }
}



