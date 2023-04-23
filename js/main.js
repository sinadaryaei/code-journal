const photoUrlInput = document.querySelector('#user-photo');
const photoPreview = document.querySelector('#photo-preview');
const $list = document.querySelector('ul');

photoUrlInput.addEventListener('input', function () {
  photoPreview.src = event.target.value;
});

const formElement = document.querySelector('#contact-form');

formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const newEntry = {
    photoUrl: event.target.elements['photo-url'].value,
    title: event.target.elements.title.value,
    notes: event.target.elements.notes.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(newEntry);

  const photoPreview = document.querySelector('#photo-preview');
  photoPreview.src = 'images/placeholder-image-square.jpg';

  formElement.reset();

  const newSubmit = renderEntry(newEntry);
  $list.prepend(newSubmit);
  viewSwap('entries');
  toggleNoEntries();
});

function renderEntry(entry) {
  const li = document.createElement('li');
  li.dataset.entryId = entry.entryId;

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
  const titleSpan = document.createElement('span');
  titleSpan.textContent = entry.title;
  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pencil-alt';
  h2.appendChild(titleSpan);
  h2.appendChild(editIcon);
  columnHalfText.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = entry.notes;
  columnHalfText.appendChild(p);

  editIcon.addEventListener('click', function () {
    data.editing = data.entries.find(function (e) {
      return e.entryId === entry.entryId;
    });
    document.querySelector('#user-title').value = data.editing.title;
    document.querySelector('#user-photo').value = data.editing.photoUrl;
    document.querySelector('#user-notes').value = data.editing.notes;
    document.querySelector('h2').textContent = 'Edit Entry';
    viewSwap('entry-form');
  });

  return li;
}

function viewSwap(view) {
  const entryForm = document.querySelector('div[data-view="entry-form"]');
  const entries = document.querySelector('div[data-view="entries"]');

  if (view === 'entry-form') {
    entryForm.classList.remove('hidden');
    entries.classList.add('hidden');
  } else if (view === 'entries') {
    entryForm.classList.add('hidden');
    entries.classList.remove('hidden');
  }
  data.view = view;
}
document.addEventListener('DOMContentLoaded', function () {
  const entriesList = document.querySelector('ul');
  if (data.entries.length === 0) {
    toggleNoEntries();
    return;
  }
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const entryElement = renderEntry(entry);
    entriesList.appendChild(entryElement);
  }
  viewSwap(data.view);
});
function toggleNoEntries() {
  const noEntriesMessage = document.querySelector('.no-entries');
  if (data.entries.length > 0) {
    noEntriesMessage.classList.add('hidden');
  } else {
    noEntriesMessage.classList.remove('hidden');
  }
}

const entries = document.querySelector('a');
entries.addEventListener('click', function () {
  viewSwap('entries');
}
);
const newButton = document.querySelector('#new-entry');
newButton.addEventListener('click', function () {
  viewSwap('entry-form');
});
