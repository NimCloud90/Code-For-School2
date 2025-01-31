const button = document.getElementById('addItem');
button.addEventListener('click', function() {
    const list = document.getElementById('itemList');
    const newItem = document.createElement('li');
    newItem.textContent = 'Item 4';
    list.appendChild(newItem);
}
);