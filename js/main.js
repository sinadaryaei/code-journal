const photoUrlInput = document.querySelector('#user-photo');
const photoPreview = document.querySelector('#photo-preview');

photoUrlInput.addEventListener('input', function () {
  photoPreview.src = photoUrlInput.value;
});
const formElement = document.querySelector('#form-element');

formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const newEntry = {
    photoUrl: formElement.elements['photo-url'].value,
    title: formElement.elements.title.value,
    notes: formElement.elements.notes.value
  };

  newEntry.entryId = data.nextEntryId;

  data.nextEntryId++;

  data.entries.unshift(newEntry);

  const photoPreview = document.querySelector('#photo-preview');
  photoPreview.src = 'images/placeholder-image-square.jpg';

  formElement.reset();
});
