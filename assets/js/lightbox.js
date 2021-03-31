  // LIGHTBOX

  // Variable for all images
  modalImageElements = document.querySelectorAll('img.modal-image');
  indice=0;

  // Modal Single Image
  const modalSingleImage = (e) => {
    extBtnContainer = document.createElement('div');
    extBtnContainer.classList.add('w3-padding', 'w3-display-topright', 'w3-margin-bottom');
      extBtn = document.createElement('span');
      extBtn.classList.add('w3-xlarge', 'w3-white', 'w3-button');
      extBtn.textContent = 'x'
      extBtn.addEventListener('click', modalGeneral);
    imgContainer = document.createElement('figure');
    imgContainer.classList.add('w3-modal-content', 'animate__animated','animate__fadeIn');
      imgPicture = document.createElement('img');
      imgPicture.classList.add('w3-image');
      imgPicture.style.width = '100%';
      imgPicture.setAttribute('alt', e.currentTarget.getAttribute('alt'));
      imgPicture.setAttribute('src', e.currentTarget.getAttribute('src'));
      imgFigCaption = document.createElement('figcaption');
      imgFigCaption.textContent = e.target.getAttribute('alt');
      imgFigCaption.classList.add('w3-black', 'w3-opacity', 'w3-xlarge', 'w3-center');
    modal.appendChild(extBtnContainer);
      extBtnContainer.appendChild(extBtn);
    modal.appendChild(imgContainer);
      imgContainer.appendChild(imgPicture);
      imgContainer.appendChild(imgFigCaption);
  }

  // MODAL MULTIPLE IMAGES
  const modalMultipleImages = (e) => {
    extBtnContainer = document.createElement('div');
    extBtnContainer.classList.add('w3-padding', 'w3-display-topright');
    extBtnContainer.addEventListener('click', modalGeneral);
      extBtn = document.createElement('span');
      extBtn.classList.add('w3-xlarge', 'w3-white', 'w3-button');
      extBtn.innerHTML = '&times;'
    imgPadding = document.createElement('div');
    imgPadding.classList.add('w3-padding-16');
      imgContainer = document.createElement('figure');
      imgContainer.classList.add('w3-modal-content', 'w3-display-container');
        imgPicture = document.createElement('img');
        imgPicture.classList.add('w3-image');
        imgPicture.style.width = '100%';
        imgPicture.setAttribute('alt', e.currentTarget.getAttribute('alt'));
        indice = parseInt(e.currentTarget.getAttribute('indice'));
        imgPicture.setAttribute('src', (modalImageElements[indice]).getAttribute('src'));
        imgLeftBtn = document.createElement('button');
        imgLeftBtn.classList.add('w3-button', 'w3-gray','w3-display-left');
        imgLeftBtn.innerHTML = '&#10094;';
        imgLeftBtn.addEventListener('click', () => {
          if(indice == 0){
            indice = modalImageElements.length-1;
          }else{
            indice -= 1;
          }
          modalGeneral();
          modalImageElements[indice].click();
        });
        imgRightBtn = document.createElement('button');
        imgRightBtn.classList.add('w3-button', 'w3-gray', 'w3-display-right');
        imgRightBtn.innerHTML = '&#10095;';
        imgRightBtn.addEventListener('click', () => {
          if(indice < modalImageElements.length-1){
            indice +=1;
          }else{
            indice = 0;
          }
          modalGeneral();
          modalImageElements[indice].click();
        });
        imgFigCaption = document.createElement('figcaption');
        imgFigCaption.classList.add('w3-black', 'w3-opacity', 'w3-large', 'w3-padding-small', 'w3-display-bottommiddle', 'w-100', 'w3-center');
        imgFigCaption.textContent = e.target.getAttribute('alt');
    modal.appendChild(extBtnContainer);
      extBtnContainer.appendChild(extBtn);
    modal.appendChild(imgPadding);
      imgPadding.appendChild(imgContainer);
        imgContainer.appendChild(imgPicture);
        imgContainer.appendChild(imgLeftBtn);
        imgContainer.appendChild(imgRightBtn);
        imgContainer.appendChild(imgFigCaption);
  }

  // Event modal to images
  if(modalImageElements){
    for(let [index, modalImageElement] of modalImageElements.entries()){
      modalImageElement.setAttribute('indice', index);
      modalImageElement.addEventListener('click', modalGeneral);
      if(modalImageElements.length > 1){
        modalImageElement.addEventListener('click', modalMultipleImages);
        if(index<1){
          modalImageElement.style = 'width:100%, height:auto; object-fit:cover';
        }else{
          modalImageElement.style = 'width:33.33333%; float:left';
        }
      }else{
        modalImageElement.addEventListener('click', modalSingleImage);;
      }
    }
  }
