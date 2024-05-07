//your code here!
document.addEventListener('DOMContentLoaded', function() {
  const list = document.getElementById('infi-list');
  const initialItemsCount = 10;
  const threshold = 200; // Threshold in pixels from the bottom to trigger loading more items
  
  // Function to create a new list item
  function createListItem(index) {
    const li = document.createElement('li');
    li.textContent = `Item ${index}`;
    return li;
  }
  
  // Add initial list items
  for (let i = 1; i <= initialItemsCount; i++) {
    list.appendChild(createListItem(i));
  }


	
  // Function to add more list items when scrolling to the bottom
  function addMoreItems() {
    const lastItem = list.lastElementChild;
    const lastItemOffset = lastItem.offsetTop + lastItem.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    
    if (pageOffset > lastItemOffset - threshold) {
      // Add two more list items
      const itemCount = list.children.length + 1;
      list.appendChild(createListItem(itemCount));
      list.appendChild(createListItem(itemCount + 1));
    }
  }
  
  // Event listener for scrolling to add more items
  window.addEventListener('scroll', addMoreItems);
});