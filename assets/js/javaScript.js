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

document.addEventListener('DOMContentLoaded', function() {
    var iconLink = document.getElementById('iconLink');
    var iconImage = document.getElementById('iconImage');

    iconLink.addEventListener('click', function (event) {
        event.preventDefault();

        iconImage.src = `assets/image/box/airplane-engines-black.svg`;
    });
});

$('.datepicker').datepicker({
    format: 'yyyy/mm/dd',
    autoclose: true
});