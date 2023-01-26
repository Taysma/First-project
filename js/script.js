<<<<<<< HEAD
let rightbt = document.getElementById('right');
let leftbt= document.getElementById('left');
let listSlide = document.getElementById('list-slide');
let mLeft = 0;

rightbt.addEventListener('click', function () {
=======
let leftbt = document.getElementById('left');
let rightbt = document.getElementById('right');
let windowSlider = document.getElementById('window-slider').offsetWidth;
let listSlide = document.getElementById('list-slide');
let slide = document.getElementsByClassName('slide');
let nbSlide = slide.length;
let mLeft = 0;

leftbt.addEventListener('click', function () {
    if (mLeft + windowSlider*2 == windowSlider && windowSlider !== undefined) {
 
       this.click.stopPropagation()
   }
   else {
       mLeft += windowSlider;
       listSlide.style.marginLeft = mLeft + 'px';
   }
 
 });

rightbt.addEventListener('click', function () {
   if (mLeft - windowSlider == windowSlider) {
>>>>>>> 55d76c0240eb198fe63cb5e2b9aad57ce0e0aef4

    if (mLeft - 500 >= -2500) {
        mLeft -= 500;

        listSlide.style.marginLeft = mLeft + 'px';
    }

});


<<<<<<< HEAD
leftbt.addEventListener('click', function () {

    if (mLeft + 500 <=  0) {
        mLeft += 500;

        listSlide.style.marginLeft = mLeft + 'px';
    } 

});
=======


>>>>>>> 55d76c0240eb198fe63cb5e2b9aad57ce0e0aef4
