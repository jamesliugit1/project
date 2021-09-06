let nowPage = 0;
const changePage = () => {
    const bannerWidth = $('.herosection').width();
    const positionX = nowPage * -1 * bannerWidth;
    $('.carousel').css('transition','.5s').css('transform',`translateX(${positionX}px)`);
}

function changePageQuietly() {
     const bannerWidth = $('.herosection').width();
    const positionX = nowPage * -1 * bannerWidth;
    $('.carousel').css('transition','none').css('transform',`translateX(${positionX}px)`);
}

let myInterval;

function startMyInterval(){
     myInterval = setInterval(function(){
     nowPage++;
     changePage();
 },3000);
}
$('.herosection').mouseenter(function(){
    clearInterval(myInterval);
});
$('.herosection').mouseleave(function(){
    startMyInterval();
})


changePage();

$('.left-arrow-area').click(function(){
 //    if (nowPage == 0) return;
    nowPage = nowPage - 1;
    changePage();
})
$('.right-arrow-area').click(function(){
 //    if (nowPage == 4) return;
    nowPage = nowPage + 1;
    changePage();
})
$('.carousel').on('transitionend',function(){
     console.log('trasitionend');
     if (nowPage >= 4){
         nowPage = 1;
         changePageQuietly();
     }
     if (nowPage <= 0) {
         nowPage = 3;
         changePageQuietly();
     }
}) 

$(window).resize(function(){
    changePageQuietly();
})
