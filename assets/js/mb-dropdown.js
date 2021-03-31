  // SHOW DROPDOWNS IN MOBILE
  const dropdown = (e) => {
    dropdownParent = e.currentTarget.parentNode;
    dropdownChild = dropdownParent.querySelector('.dropdown-content');
    dropdownChild.classList.toggle('w3-show');
  }

  divDropdowns = document.querySelectorAll('div.w3-dropdown-click button');
  if(divDropdowns){
    for(let [index,divDropdown] of divDropdowns.entries()){
      divDropdown.addEventListener('click', dropdown);
      divDropdown.setAttribute('iDropdown', index);
    }
  }
