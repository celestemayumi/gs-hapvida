document.addEventListener("DOMContentLoaded", () => {
    const openTriagem = document.getElementById('openTriagem');
    const modalTriagem = document.getElementById('modalTriagem');
    const closeTriagem = document.getElementById('closeTriagem');

    openTriagem.addEventListener('click', () => {
        modalTriagem.showModal();
    });

    closeTriagem.addEventListener('click', () => {
        modalTriagem.close();
    });
});
