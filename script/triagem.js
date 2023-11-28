 document.addEventListener("DOMContentLoaded", () => {
    const triagem = document.querySelector('.triagem-js');
     const modal = document.querySelector('.dialog-triagem');
     const buttonTriagem = document.querySelector('.button-triagem');
    
      triagem.addEventListener('click', () =>{
          modal.showModal();
         
      })
     buttonTriagem.addEventListener('click', () =>{
        modal.close();
    })

 });