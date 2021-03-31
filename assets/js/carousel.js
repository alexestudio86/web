// CAROUSEL / SLIDER

const carouselContainers = document.querySelectorAll('div.carousel');

var carouselIndex = 0;

const carouselPlayer = () => {
  for(let carouselContainer of carouselContainers){
    carouselImgs = carouselContainer.querySelectorAll('img');
    carouselText = carouselContainer.querySelector('.altImg');
    for(let carouselImg of carouselImgs){
      carouselImg.classList.remove('w3-show');
    };
    carouselImgs[carouselIndex].classList.add('w3-show');
    indImgAux = 0;
    indImg = parseInt(carouselImgs[carouselIndex].getAttribute('indeximg'));
    if(indImg){
      indImgAux = parseInt(carouselImgs[carouselIndex].getAttribute('indeximg'));
    }else{
      indImgAux = 0;
    }
    if(carouselText){
      carouselText.textContent = (indImgAux+1)+' of '+carouselImgs.length;
    }
  };
}
carouselPlayer();


var clickState = false;
const carouselControls = () => {
  for(let carouselContainer of carouselContainers){
    carouselImgs = carouselContainer.querySelectorAll('img');
    for(let [index,carouselImg] of carouselImgs.entries()){
      carouselImg.classList.add('w3-hide');
      carouselImg.setAttribute('indeximg', index);
      carouselImg.style = 'width:100%';
    };
    sliderContainer = document.createElement('div');
    sliderContainer.classList.add('w3-row', 'w3-black', 'w3-padding');
      leftContainer = document.createElement('div');
      leftContainer.classList.add('w3-col', 'w3-black','w3-center', 'w3-hover-white');
      leftContainer.style = 'width:15%; cursor:pointer';
      // Left Button
      leftContainer.addEventListener('click', () => {
        if(carouselIndex == 0){
          carouselIndex = carouselImgs.length-1;
        }else{
          carouselIndex -= 1;
        }
        carouselPlayer();
      });
        leftButton = document.createElement('a');
        leftButton.classList.add('w-100', 'w3-xlarge');
        leftButton.innerHTML = '&#10094;';
      textContainer = document.createElement('div');
      textContainer.classList.add('w3-col', 'w3-padding', 'w3-center');
      textContainer.style = 'width:70%';
        text = document.createElement('div');
        text.classList.add('w3-white', 'w3-round', 'w-100', 'altImg');
        text.textContent = '1 of '+carouselImgs.length;
      rightContainer = document.createElement('a');
      rightContainer.classList.add('w3-col', 'w3-black', 'w3-center', 'w3-hover-white');
      rightContainer.style = 'width:15%; cursor:pointer';
      // Right Button
      rightContainer.addEventListener('click', () => {
        if(carouselIndex < carouselImgs.length-1){
          carouselIndex += 1;
        }else{
          carouselIndex = 0;
        }
        carouselPlayer();
      });
        rightButton = document.createElement('div');
        rightButton.classList.add('w3-right', 'w-100', 'w3-xlarge');
        rightButton.innerHTML = '&#10095;';

    carouselContainer.appendChild(sliderContainer);
      sliderContainer.appendChild(leftContainer);
        leftContainer.appendChild(leftButton);
      sliderContainer.appendChild(textContainer);
        textContainer.appendChild(text);
      sliderContainer.appendChild(rightContainer);
        rightContainer.appendChild(rightButton);
  }
}
if(carouselContainers){
  carouselControls();
}
