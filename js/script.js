
const checkbox = document.getElementById('burger');
const div = document.getElementById('menu_items');
menu_items.style.display = 'none';

checkbox.addEventListener('click', function handleClick() {
    if (checkbox.checked) {
        menu_items.style.display = 'block';
    } else {
        menu_items.style.display = 'none';
    }
});
  

const div1 = document.getElementById('more_text1');
var button = document.getElementById('show_more1');
button.addEventListener('click', toggle1);
more_text1.style.display = 'none';

function toggle1(){
    if (more_text1.style.display == 'none') {
        more_text1.style.display = 'block';
      } else {
        more_text1.style.display = 'none';
      }
};

const div2 = document.getElementById('more_text2');
var button2 = document.getElementById('show_more2');
button2.addEventListener('click', toggle2);
more_text2.style.display = 'none';

function toggle2(){
    if (more_text2.style.display == 'none') {
        more_text2.style.display = 'block';
      } else {
        more_text2.style.display = 'none';
      }
};

const div3 = document.getElementById('more_text3');
var button3 = document.getElementById('show_more3');
button3.addEventListener('click', toggle3);
more_text3.style.display = 'none';

function toggle3(){
    if (more_text3.style.display == 'none') {
        more_text3.style.display = 'block';
      } else {
        more_text3.style.display = 'none';
      }
};

const div4 = document.getElementById('more_text4');
var button4 = document.getElementById('show_more4');
button4.addEventListener('click', toggle4);
more_text4.style.display = 'none';

function toggle4(){
    if (more_text4.style.display == 'none') {
        more_text4.style.display = 'block';
      } else {
        more_text4.style.display = 'none';
      }
};

const div5 = document.getElementById('more_text5');
var button5 = document.getElementById('show_more5');
button5.addEventListener('click', toggle5);
more_text5.style.display = 'none';

function toggle5(){
    if (more_text5.style.display == 'none') {
        more_text5.style.display = 'block';
      } else {
        more_text5.style.display = 'none';
      }
};

const div6 = document.getElementById('more_text6');
var button6 = document.getElementById('show_more6');
button6.addEventListener('click', toggle6);
more_text6.style.display = 'none';

function toggle6(){
    if (more_text6.style.display == 'none') {
        more_text6.style.display = 'block';
      } else {
        more_text6.style.display = 'none';
      }
};