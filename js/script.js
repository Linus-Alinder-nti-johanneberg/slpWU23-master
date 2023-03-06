
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
  
const div1 = document.getElementById('more_text');
var button = document.getElementById('show_more');
button.addEventListener('click', toggle);
more_text.style.display = 'none';

function toggle(){
    if (more_text.style.display == 'none') {
        more_text.style.display = 'block';
      } else {
        more_text.style.display = 'none';
      }
};
