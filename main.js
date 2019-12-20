const mainTextArea = document.getElementById('main-text-area');
const text1 = document.getElementById('text1');

mainTextArea.innerHTML = 'jsから書きました';

// onclick
const save = () => {
  alert('text1の値 : ' + text1.value);
}
