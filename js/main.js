const photoUrlInput = document.querySelector('#user-photo');
const photoPreview = document.querySelector('#photo-preview');

photoUrlInput.addEventListener('input', function () {
  photoPreview.src = photoUrlInput.value;
});
