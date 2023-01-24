let rightbt = document.getElementById('right');
let leftbt = document.getElementById('left');
let windowSlider = document.getElementById('window-slider').offsetWidth;
let listSlide = document.getElementById('list-slide')
let slide = document.getElementsByClassName('slide');
let nbSlide = slide.length;
let mLeft = 0;


rightbt.addEventListener('click', function () {
   if (mLeft - windowSlider == windowSlider*-5) {

      this.click.stopPropagation()
  }
  else {
      mLeft -= windowSlider;
      listSlide.style.marginLeft = mLeft + 'px';
  }
});



leftbt.addEventListener('click', function () {
   if (mLeft + windowSlider == windowSlider+1) {

      this.click.stopPropagation()
  }
  else {
      mLeft += windowSlider;
      listSlide.style.marginLeft = mLeft + 'px';
  }

});
