document.getElementById("modal-toggle").addEventListener("click", function() {
    element = document.getElementById('modal').classList
    element.toggle("hidden");
});

let imageCheckboxes = document.querySelectorAll('.checkbox-input');

for (let i =0; i < imageCheckboxes.length; i++) {
    imageCheckboxes[i].addEventListener("click", function(e) {
        e.preventDefault()
    })
}



// Validate Form Inputs
const form = document.querySelector('form');
form && form.addEventListener('submit', (e) => {
    [...document.querySelectorAll('mce-error-response')].forEach(alert => {
      alert.parentNode.removeChild(alert);
    });
    
    [...form.elements].forEach(input => {
      if (input.type !== 'submit' && input.value === '') {
        e.preventDefault();
        input.classList.add('input-error');
        input.insertAdjacentHTML('afterend', `
          <div class="alert alert-${input.id}">
            Please enter your ${input.placeholder}
          </div>
        `);
      }
    });
  });
  
  
  // Clear Form Errors on Focus
  document.addEventListener('focus', (e) => {
    e.target.classList.remove('mce-error-response');
    const inputMessage = document.querySelector(`.alert-${e.target.id}`);
    inputMessage && inputMessage.parentNode.removeChild(inputMessage);
  }, true);