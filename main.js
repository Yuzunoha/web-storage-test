const mainTextArea = document.getElementById('main-text-area');
const text1 = document.getElementById('text1');

// webstorageの値をhtmlに表示する
const update = () => {
  const key = 'text1';
  const value = localStorage.getItem(key);
  mainTextArea.innerHTML = 'webstorageの値 : ' + key + ' => ' + value;
}

// onclick
const save = () => {
  localStorage.setItem('text1', text1.value);
  update();
}

update();

/*
// 次の3つは等価
localStorage.setItem('apple', '200');
localStorage.apple = '200';
localStorage['apple'] = '200';

// 次の3つも等価
var data = localStorage.getItem('apple');
var data = localStorage.apple;
var data = localStorage['apple'];
削除
// 次の3つは等価
localStorage.removeItem('apple');
delete localStorage.apple;
delete localStorage['apple'];
一括削除
localStorage.clear();
データの列挙
for (var i = 0; i < localStorage.length; ++i) {
    var key = localStorage.key(i);
    var value = localStorage[key];
*/