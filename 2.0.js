let fondosYes = ['miamorcito1.1.jpg', 'miamorcito2.2.jpg', 'miamorcito1y2.3.jpg', 'miamorcito1.4.jpg'];
let textosYes = ['S: Estás tontisima. P: Por tí <33', 'I wasnt asking', '...', 'Dummy...'];
let fondosNo = ['miamorcito2.1.jpg', 'miamorcito1.2.jpg', 'miamorcito1y2.3.jpg', 'miamorcito1.4.jpg'];
let textosNo = ['What do you fucking mean by "no"?', 'P: ¿Vamos? Ya tengo la cita planeada. S: Oki, pero primero...', '...', 'Dummy...'];
let indice = 0;

function mostrarFondos(opcion) {
  document.getElementById('titulo').style.display = 'none';
  document.querySelector('.opciones').style.display = 'none';
  document.getElementById('contenido').style.display = 'block';
  
  if (opcion === 'yes') {
    document.body.style.backgroundImage = `url(${fondosYes[0]})`;
    document.getElementById('texto').textContent = textosYes[0];
    document.getElementById('siguiente').style.display = 'block';
  } else {
    document.body.style.backgroundImage = `url(${fondosNo[0]})`;
    document.getElementById('texto').textContent = textosNo[0];
    document.getElementById('siguiente').style.display = 'block';
  }
}

function siguiente() {
  if (indice < 3) {
    indice++;
    if (document.body.style.backgroundImage.includes('miamorcito1')) {
      if (document.body.style.backgroundImage.includes('_si')) {
        document.body.style.backgroundImage = `url(${fondosYes[indice]})`;
        document.getElementById('texto').textContent = textosYes[indice];
      } else {
        document.body.style.backgroundImage = `url(${fondosNo[indice]})`;
        document.getElementById('texto').textContent = textosNo[indice];
      }
    } else {
      if (document.body.style.backgroundImage.includes('_no')) {
        document.body.style.backgroundImage = `url(${fondosNo[indice]})`;
        document.getElementById('texto').textContent = textosNo[indice];
      } else {
        document.body.style.backgroundImage = `url(${fondosYes[indice]})`;
        document.getElementById('texto').textContent = textosYes[indice];
      }
    }
  } else {
    alert('¡Has llegado al final de los fondos!');
  }
}
