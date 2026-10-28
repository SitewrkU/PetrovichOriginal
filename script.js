function buyButtonClick(button) {
  var overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  document.body.classList.add('darken');

  setTimeout(function() {
    document.body.classList.remove('darken');
    overlay.remove();

    button.classList.add('clicked');
    button.innerHTML = 'Куплено';
    button.onclick = null;
  }, 2000);
}

function makeRepost() {
  var buttonr = document.getElementById('repostBtn');
  buttonr.innerHTML = 'Репостнуто!';
  buttonr.style.backgroundColor = 'gray';
  buttonr.style.color = 'white'
  buttonr.style.borderColor = 'gray'
  buttonr.style.cursor = 'default';
  buttonr.disabled = true; 
}

function makeSave() {
  var button2 = document.getElementById('saveBtn');
  button2.innerHTML = 'Збережено!';
  button2.style.backgroundColor = 'gray';
  button2.style.color = 'white'
  button2.style.borderColor = 'gray'
  button2.style.cursor = 'default';
  button2.disabled = true; 
}

var activeButton = null;

function toggleButton(buttonId) {
  var clickedButton = document.getElementById(buttonId);

  if (activeButton !== null) {
    // Повернення попередньої активності
    activeButton.innerHTML = activeButton.getAttribute('data-original-text');
    activeButton.style.backgroundColor = activeButton.getAttribute('data-original-bg-color');
    activeButton.style.color = activeButton.getAttribute('data-original-text-color');
    activeButton.style.borderColor = activeButton.getAttribute('data-original-border-color');
    activeButton.style.cursor = 'pointer';
    activeButton.disabled = false;
  }

  // Активування нової кнопки
  clickedButton.setAttribute('data-original-text', clickedButton.innerHTML);
  clickedButton.setAttribute('data-original-bg-color', clickedButton.style.backgroundColor);
  clickedButton.setAttribute('data-original-text-color', clickedButton.style.color);
  clickedButton.setAttribute('data-original-border-color', clickedButton.style.borderColor);

  clickedButton.innerHTML = (buttonId === 'likeBtn') ? 'Уподобано!' : 'Не вподобано';
  clickedButton.style.backgroundColor = (buttonId === 'likeBtn') ? '#ffb0b8' : '#adaec4';
  clickedButton.style.color = '#000000';
  clickedButton.style.borderColor = (buttonId === 'likeBtn') ? '#99000f' : '#30314a';
  clickedButton.style.cursor = 'default';
  clickedButton.disabled = true;

  activeButton = clickedButton;
}


function makeRepost2() {
  var buttonr = document.getElementById('repostBtn2');
  buttonr.innerHTML = 'Репостнуто!';
  buttonr.style.backgroundColor = 'gray';
  buttonr.style.color = 'white'
  buttonr.style.borderColor = 'gray'
  buttonr.style.cursor = 'default';
  buttonr.disabled = true; 
}

function makeSave2() {
  var button2 = document.getElementById('saveBtn2');
  button2.innerHTML = 'Збережено!';
  button2.style.backgroundColor = 'gray';
  button2.style.color = 'white'
  button2.style.borderColor = 'gray'
  button2.style.cursor = 'default';
  button2.disabled = true; 
}

var activeButton2 = null;

function toggleButton2(buttonId) {
  var clickedButton = document.getElementById(buttonId);

  if (activeButton2 !== null) {
    // Повернення попередньої активності
    activeButton2.innerHTML = activeButton2.getAttribute('data-original-text');
    activeButton2.style.backgroundColor = activeButton2.getAttribute('data-original-bg-color');
    activeButton2.style.color = activeButton2.getAttribute('data-original-text-color');
    activeButton2.style.borderColor = activeButton2.getAttribute('data-original-border-color');
    activeButton2.style.cursor = 'pointer';
    activeButton2.disabled = false;
  }

  // Активування нової кнопки
  clickedButton.setAttribute('data-original-text', clickedButton.innerHTML);
  clickedButton.setAttribute('data-original-bg-color', clickedButton.style.backgroundColor);
  clickedButton.setAttribute('data-original-text-color', clickedButton.style.color);
  clickedButton.setAttribute('data-original-border-color', clickedButton.style.borderColor);

  clickedButton.innerHTML = (buttonId === 'likeBtn2') ? 'Уподобано!' : 'Не вподобано';
  clickedButton.style.backgroundColor = (buttonId === 'likeBtn2') ? '#ffb0b8' : '#adaec4';
  clickedButton.style.color = '#000000';
  clickedButton.style.borderColor = (buttonId === 'likeBtn2') ? '#99000f' : '#30314a';
  clickedButton.style.cursor = 'default';
  clickedButton.disabled = true;

  activeButton2 = clickedButton;
}