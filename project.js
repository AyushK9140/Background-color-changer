
// document.querySelectorAll('.button').forEach(button => {
//     button.addEventListener('click', () => {
//       const color = button.getAttribute('id');
//       document.body.style.backgroundColor = color;
//     });
//   });
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {

      event.stopPropagation();
      const color = button.getAttribute('id');
      document.body.style.backgroundColor = color;
    });
  });

  // Reset background color when clicking outside the buttons
  document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = 'black';
  });
