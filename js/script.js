let rightbt = document.getElementById('right');
let leftbt= document.getElementById('left');
let listSlide = document.getElementById('list-slide');
let mLeft = 0;

rightbt.addEventListener('click', function () {

    if (mLeft - 500 >= -2500) {
        mLeft -= 500;

        listSlide.style.marginLeft = mLeft + 'px';
    }

});


leftbt.addEventListener('click', function () {

    if (mLeft + 500 <=  0) {
        mLeft += 500;

        listSlide.style.marginLeft = mLeft + 'px';
    } 

});