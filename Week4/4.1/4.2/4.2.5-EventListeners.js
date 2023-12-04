// add an event listener to the dog picture that listens for a "click" and gives an alert
const dogPicture = document.getElementById('dogPictureId');
dogPicture.addEventListener('click', function() {
    alert('You clicked the dog picture!');
});

// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const listItems = document.querySelectorAll('.classSchedule li');
listItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'lightblue';
    });
});
// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});
