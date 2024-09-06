document.addEventListener('DOMContentLoaded', function () {
  const tableItems = document.querySelectorAll('.table-item');

  // Add event listener to each table item
  tableItems.forEach((item) => {
    item.addEventListener('click', function () {
      const tableNumber = this.getAttribute('data-table');
      const summary = document.getElementById(`summary-${tableNumber}`);

      // Toggle the summary visibility
      if (summary.classList.contains('hidden')) {
        summary.classList.remove('hidden');
      } else {
        summary.classList.add('hidden');
      }
    });
  });
});


// function for drag
document.addEventListener('DOMContentLoaded', (event) => {
  const boxes = document.querySelectorAll('.box'); // Select all elements with the class 'box'
  let isDragging = false; // Flag to indicate if a box is being dragged
  let currentBox = null; // Reference to the currently dragged box
  let offsetX, offsetY; // Variables to store the offset between the mouse position and the box's top-left corner

  // Add mousedown event listener to each box
  boxes.forEach(box => {
    box.addEventListener('mousedown', (e) => {
      isDragging = true; // Set the dragging flag to true
      currentBox = box; // Set the current box to the one being clicked
      offsetX = e.clientX - box.getBoundingClientRect().left; // Calculate the horizontal offset
      offsetY = e.clientY - box.getBoundingClientRect().top; // Calculate the vertical offset
      box.style.cursor = 'grabbing'; // Change the cursor to indicate dragging
    });
  });

  // Add mousemove event listener to the document
  document.addEventListener('mousemove', (e) => {
    if (isDragging && currentBox) { // Check if dragging is true and a box is being dragged
      currentBox.style.left = `${e.clientX - offsetX}px`; // Update the box's horizontal position
      currentBox.style.top = `${e.clientY - offsetY}px`; // Update the box's vertical position
    }
  });

  // Add mouseup event listener to the document
  document.addEventListener('mouseup', () => {
    if (isDragging) { // Check if dragging is true
      isDragging = false; // Set the dragging flag to false
      if (currentBox) { // Check if a box is being dragged
        currentBox.style.cursor = 'move'; // Change the cursor back to the move cursor
        currentBox = null; // Clear the reference to the current box
      }
    }
  });
});

  // functionality for zoomIn zoomOut 
    const content = document.getElementById('content-area');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');
    let scale = 1;
    const scaleStep = 0.1;
    const maxScale = 3;
    const minScale = 0.5;

    zoomInButton.addEventListener('click', () => {
      if (scale < maxScale) {
        scale += scaleStep;
        content.style.transform = `scale(${scale})`;
      }
    });

    zoomOutButton.addEventListener('click', () => {
      if (scale > minScale) {
        scale -= scaleStep;
        content.style.transform = `scale(${scale})`;
      }
    });


 


