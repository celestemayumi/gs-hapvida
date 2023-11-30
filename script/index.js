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

    const openLembrete = document.getElementById('openLembrete');
    const modalLembrete = document.getElementById('modalLembrete');
    const closeLembrete = document.getElementById('closeLembrete');

    openLembrete.addEventListener('click', () => {
        modalLembrete.showModal();
    });

    closeLembrete.addEventListener('click', () => {
        modalLembrete.close();
    });

    // Codigo do lembrete

    const reminderInput = document.getElementById('reminderInput');
    const reminderItems = document.getElementById('reminderItems');

    // Funcao para adicionar item

    function addReminderItem() {
        const reminderValue = reminderInput.value;
        if (reminderValue != ''){
            const reminder = document.createElement('li');
            reminder.className = 'reminderItem';
            reminder.innerHTML = `
            <div class="text-box">
            <p>${reminderValue}</p>
            <button id="btnDelete" class="delete" onclick="deleteReminderItem(this)">Deletar</button>
            </div>
            `;
            reminderItems.append(reminder);
            reminderInput.value = '';
        }
    }

    // Deletar

    window.deleteReminderItem = function(element) {
        const reminder = element.closest('.reminderItem');
        reminderItems.removeChild(reminder);
      };


    // Esperando pelo evento

    reminderInput.addEventListener('keypress', function(e) {
        if (e.key === "Enter"){
            addReminderItem();
        }
    })


});
