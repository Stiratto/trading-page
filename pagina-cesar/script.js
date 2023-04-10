/* click listener */ 
function handleTitleClick(titleElement, dropdownElement) {
    titleElement.addEventListener("click", () => {
      dropdownElement.classList.toggle("dropdown-checkboxes");
    });
  }
  
  /* change listener */ 
  function handleCheckboxChange(checkboxElements, resultElement, checkboxBElements) {
    checkboxElements.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        let sumaAlcista = 0;
        let sumaBajista = 0;
        checkboxElements.forEach((checkbox, i) => {
          if (checkbox.checked) {
            sumaAlcista++;
          }
          if (checkboxBElements[i].checked){
            sumaBajista++;
          }
        });
  
  
  
        if (sumaAlcista > sumaBajista){
          resultElement.innerHTML = `Tu BIAS para hoy es Alcista`;
          resultElement.style.background = 'green'
          img2.style.display = "block"
          img.style.display = "none"
        } else if (sumaBajista > sumaAlcista){
          resultElement.innerHTML = `Tu BIAS para hoy es Bajista`;
          resultElement.style.background = 'red'
          img.style.display = "block"
          img2.style.display = "none"
        } else {
          resultElement.innerHTML = `Tu BIAS para hoy es Neutro`;
          resultElement.style.background = 'gray'
          img2.style.display = "none"
          img.style.display = "none"
        }
      });
    });
  
  
    checkboxBElements.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        let sumaAlcista = 0;
        let sumaBajista = 0;
        checkboxBElements.forEach((checkbox, i) => {
          if (checkbox.checked){
            sumaBajista++;
          }
          if (checkboxElements[i].checked){
            sumaAlcista++;
          }
        });
  
        if (sumaAlcista > sumaBajista){
          resultElement.innerHTML = `Tu BIAS para hoy es Alcista`;
          resultElement.style.background = 'green'
          img2.style.display = "block"
          img.style.display = "none"
        } else if (sumaBajista > sumaAlcista){
          resultElement.innerHTML = `Tu BIAS para hoy es Bajista`;
          resultElement.style.background = 'red'
          img.style.display = "block"
          img2.style.display = "none"
        } else {
          resultElement.innerHTML = `Tu BIAS para hoy es Neutro`;
          resultElement.style.background = 'gray'
          img.style.display = "none"
          img2.style.display = "none"
        }
      });
    });
  }
  
  // Obtener los elementos del DOM
  const dailyTitle = document.getElementById("dailyTitle");
  const checkboxDropdown = document.getElementById("checkbox");
  const checkboxDropdown2 = document.getElementById("checkbox2");
  const checkboxDropdown3 = document.getElementById("checkbox3");
  const checkboxDropdown4 = document.getElementById("checkbox4");
  const fourHours = document.getElementById("fourHours");
  const oneHour = document.getElementById("oneHour");
  const fifteenMinutes = document.getElementById("fifteenMinutes");
  const checkbox1 = document.getElementById('nav-check1');
  const checkbox2 = document.getElementById('nav-check2');
  const checkbox3 = document.getElementById('nav-check3');
  const checkbox4 = document.getElementById('nav-check4');
  const checkbox5 = document.getElementById('nav-check5');
  const checkbox6 = document.getElementById('nav-check6');
  const checkbox7 = document.getElementById('nav-check7');
  const checkbox8 = document.getElementById('nav-check8');
  const resultado = document.getElementById('resultado');
  const alcistaLabel = document.getElementById("alcistaLabel");
  const img = document.getElementById("imgBajista")
  const img2 = document.getElementById("imgAlcista")
  
  // Llamar a las funciones para manejar los eventos
  handleTitleClick(dailyTitle, checkboxDropdown);
  handleTitleClick(fourHours, checkboxDropdown2);
  handleTitleClick(oneHour, checkboxDropdown3);
  handleTitleClick(fifteenMinutes, checkboxDropdown4);
  handleCheckboxChange([checkbox1, checkbox3, checkbox5, checkbox7], resultado, [checkbox2, checkbox4, checkbox6, checkbox8], "alcista", "bajista");
  