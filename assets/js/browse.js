
  document.querySelectorAll('.custom-view-btn').forEach(button => {
    button.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-img');
      const modal = document.getElementById('custom-img-modal');
      const modalImg = document.getElementById('custom-modal-img');
      modal.style.display = 'block';
      modalImg.src = imgSrc;
    });
  });

  document.getElementById('custom-img-modal').addEventListener('click', function(e) {
    if (e.target.classList.contains('custom-modal-close') || e.target.id === 'custom-img-modal') {
      this.style.display = 'none';
    }
  });
