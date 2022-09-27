function leftarrow() {
  let slider = document.querySelector('.class5');
  console.log('Left');
  let xValue = getTranslateX(slider);
  if (xValue < 0) {
    console.log(xValue + 50, xValue > -100);
    slider.style.transform = 'translateX(' + (xValue + 50) + 'vw)';
  }
}
function rightarrow() {
  let slider = document.querySelector('.class5');
  console.log('right');
  let xValue = getTranslateX(slider);
  console.log(xValue - 50);
  if (xValue > -100)
    slider.style.transform = 'translateX(' + (xValue - 50) + 'vw)';
}

function getTranslateX(myElement) {
  var style = window.getComputedStyle(myElement);
  var matrix = new WebKitCSSMatrix(style.transform);
  console.log('translateX: ', convertPXToVW(matrix.m41));
  return convertPXToVW(matrix.m41);
}

function convertPXToVW(px) {
  return parseInt(px * (100 / window.innerWidth));
}
