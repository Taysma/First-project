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

      this.click.stopPropagation()
  }
  else {
      mLeft -= windowSlider;
      listSlide.style.marginLeft = mLeft + 'px';
  }
});




