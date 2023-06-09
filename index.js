// Get the containers and reset button
const container1 = document.querySelector('.container:first-child');
const container2 = document.querySelector('.container:last-child');
const resetButton = document.getElementById('resetButton');

// Add event listeners for drag and drop events
container1.addEventListener('dragstart', dragStart);
container2.addEventListener('dragover', dragOver);
container2.addEventListener('drop', drop);
resetButton.addEventListener('click', reset);

// Handle dragstart event
function dragStart(event) {
  const item = event.target;
  item.classList.add('dragged');
  event.dataTransfer.setData('text/plain', item.textContent);
}

// Handle dragover event
function dragOver(event) {
  event.preventDefault();
}

// Handle drop event
function drop(event) {
  event.preventDefault();
  const droppedItemText = event.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = droppedItemText;
  event.target.appendChild(newItem);

  const successMessage = document.createElement('p');
  successMessage.classList.add('success-message');
  successMessage.textContent = 'Item dropped successfully!';
  container2.appendChild(successMessage);
}

// Handle reset button click event
function reset() {
  container1.innerHTML = `
    <h3>Container 1</h3>
    <div class="item" draggable="true">Item 1</div>
    <div class="item" draggable="true">Item 2</div>
    <div class="item" draggable="true">Item 3</div>
  `;
  container2.innerHTML = `
    <h3>Container 2</h3>
  `;
}
