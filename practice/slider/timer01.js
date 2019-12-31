
let count = 0
function onStart() {
    console.log('%c Timer running', 'color: blue')
    // setTimeout(function () {
    //     console.log('%c Timer running', 'color: red')
    // }, 2 * 1000)

    let eleTimer = document.getElementById('timer')
    setInterval(function () {
        console.log('%c Timer running', 'color: red')
        eleTimer.innerHTML = '<h1>' + count++ + '</h1>'
    }, 100)

}


let imgs = [
    'https://www.costco.ca/wcsstore/CostcoCABCCatalogAssetStore/homepage/d-hero-190603-time-for-dad-en.jpg',
    'https://www.costco.ca/wcsstore/CostcoCABCCatalogAssetStore/homepage/d-hero-190603-evolution-wall-bed-en.jpg',
    'https://www.costco.ca/wcsstore/CostcoCABCCatalogAssetStore/homepage/d-hero-190506-Contest-en.jpg',
    'https://www.costco.ca/wcsstore/CostcoCABCCatalogAssetStore/homepage/d-auto-hero-190603-en.jpg',
    'https://www.costco.ca/wcsstore/CostcoCABCCatalogAssetStore/homepage/d-hero-190603-travel-en.jpg'
]

let imgCount = 0
let eleSlider = document.getElementById('slider')
eleSlider.setAttribute('src', imgs[0])
function moveSlider() {
eleSlider.setAttribute('src', imgs[imgCount++ % imgs.length])
}
setInterval(moveSlider, 1000)

function onClickImg(xxx){
   let index = parseInt (xxx.getAttribute('data-btn'), 10)
    let img = imgs[index]
    eleSlider.setAttribute('src', img)
}

createIndicators()
function createIndicators() {
    let eleIndicator = document.getElementById('indicator')
    for (let i = 0; i < imgs.length; i++) { //for循环是让button的数量和图片一样
        let btn = document.createElement('button')
        eleIndicator.appendChild(btn)
        btn.setAttribute('data-btn', i) //这步的目的是为了创建明确标记每张图片对应的button的属性，'data-btn'是属性，i是标记
        btn.setAttribute('onclick', 'onClickImg(this)')//这一步是标记属性后我们怎么去控制每个button，通过加事件的形式
        btn.innerHTML = 'O'
    }
}








