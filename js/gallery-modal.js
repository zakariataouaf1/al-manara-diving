// Gallery modal
var galleryItems = document.querySelectorAll('.g-item');
var galleryModal = document.getElementById('galleryModal');
var galleryModalMedia = document.getElementById('galleryModalMedia');
var galleryCloseBtn = galleryModal ? galleryModal.querySelector('.gallery-modal-close') : null;

function openGalleryModal(bgImage) {
  if (!galleryModal || !galleryModalMedia) return;
  galleryModalMedia.style.backgroundImage = bgImage;
  galleryModal.classList.add('open');
  galleryModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeGalleryModal() {
  if (!galleryModal) return;
  galleryModal.classList.remove('open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

galleryItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var bg = item.querySelector('.g-item-bg');
    if (!bg) return;
    var bgImage = window.getComputedStyle(bg).backgroundImage;
    openGalleryModal(bgImage);
  });
});

if (galleryModal) {
  galleryModal.addEventListener('click', function(e) {
    if (e.target === galleryModal) closeGalleryModal();
  });
}

if (galleryCloseBtn) {
  galleryCloseBtn.addEventListener('click', closeGalleryModal);
}

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeGalleryModal();
});
