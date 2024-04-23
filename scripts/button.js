// モーダルのjavascriptです。id指定すればいくらでもモーダルを管理できます。

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalbg = modal.parentElement;
  modal.style.display = 'block';
  modalbg.style.display = 'block';

  window.addEventListener('click', function (event) {
      if (event.target === modalbg) {
          closeModal(modalId);
      }
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalbg = modal.parentElement;
  modal.style.display = 'none';
  modalbg.style.display = 'none';
}