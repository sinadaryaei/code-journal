const photoUrlInput = document.querySelector('#user-photo');
const photoPreview = document.querySelector('#photo-preview');

photoUrlInput.addEventListener('input', function () {
  photoPreview.src = photoUrlInput.value;
});

const formElement = document.querySelector('#contact-form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const newEntry = {
    photoUrl: event.target.elements['photo-url'].value,
    title: event.target.elements.title.value,
    notes: event.target.elements.notes.value
  };

  newEntry.entryId = data.nextEntryId;

  data.nextEntryId++;

  data.entries.unshift(newEntry);

  const photoPreview = document.querySelector('#photo-preview');
  photoPreview.src = 'images/placeholder-image-square.jpg';

  formElement.reset();
});
