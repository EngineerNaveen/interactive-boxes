const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    
    boxes.forEach(b => {
      b.classList.remove('expanded');
      const options = b.querySelector('.options');
      if (options) options.remove();
    });


    box.classList.add('expanded');


    const options = document.createElement('div');
    options.className = 'options';
    options.innerHTML = `
      <div><strong>Choose Color:</strong> Red | Green | Blue</div>
      <div><strong>Choose Size:</strong> Small | Medium | Large</div>
    `;
    box.appendChild(options);
  });
});
