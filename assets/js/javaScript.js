// let items = document.querySelectorAll('.carousel .carousel-item')
//
// items.forEach((el) => {
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })
//
//
// $(document).ready(function() {
//     // Activate the carousel
//     $("#myCarousel").carousel({
//         interval: false
//     });
//
//     // Enable carousel control buttons
//     $(".carousel-control-prev").click(function() {
//         $("#myCarousel").carousel("prev");
//         $("#myCarousel .carousel-item:first").appendTo("#myCarousel .carousel-inner");
//     });
//     $(".carousel-control-next").click(function() {
//         $("#myCarousel").carousel("next");
//         $("#myCarousel .carousel-item:last").prependTo("#myCarousel .carousel-inner");
//     });
// });
var items = document.querySelectorAll('.carousel .carousel-item');
items.forEach((e)=>{
    const slide = 2;
    let next = e.nextElementSibling;
    for(var i=0;i<slide;i++){
        if(!next){
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        e.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})