
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
  