const buttons = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        panels.forEach(p => p.classList.remove('active'));
        buttons.forEach(b => b.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});