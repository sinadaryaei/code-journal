// querySelector method of the document object is called with on argument the id user-photo
// is being assigned to the variable photoUrlInput

const photoUrlInput = document.querySelector('#user-photo');
const photoPreview = document.querySelector('#photo-preview');

photoUrlInput.addEventListener('input', function () {
  photoPreview.src = event.target.value;
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
function renderEntry(entry) {
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.className = 'row';
  li.appendChild(div);

  const columnHalf = document.createElement('div');
  columnHalf.className = 'column-half';
  div.appendChild(columnHalf);

  const img = document.createElement('img');
  img.className = 'entry-image';
  img.setAttribute('src', entry.photoUrl);
  columnHalf.appendChild(img);

  const columnHalfText = document.createElement('div');
  columnHalfText.className = 'column-half';
  div.appendChild(columnHalfText);

  const h2 = document.createElement('h2');
  h2.textContent = entry.title;
  columnHalfText.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalfText.appendChild(p);
  return li;
}
