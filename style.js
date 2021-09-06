// let lastScroll = 0;
// let headerneedsChanged = true
// $(window).scroll(function(){
//     const nowScroll = $(window).scrollTop();
//     const nowHeaderHeight = $('header').height(); 
//     console.log(nowHeaderHeight);
//     console.log($('header').css('height'));
//     console.log(nowHeaderHeight*.8);
//     if (nowScroll > lastScroll) {
//         if (headerneedsChanged) {
//             $('header').css('height',nowHeaderHeight*.8 + 'px');
//             $('.brick').css('height',nowHeaderHeight*.8 + 'px');
//             headerneedsChanged = false;
//         }
//         else return
//     }
//     else {
//         if (headerneedsChanged) {
//             $('header').css('height',nowHeaderHeight*.8 + 'px');
//             $('.brick').css('height',nowHeaderHeight*.8 + 'px');
//             headerneedsChanged = false;
//         }
//         else return
//     }
//     Scroll = nowScroll;
    
// }) 
$(".page-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});