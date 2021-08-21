const div_mouse_effect = document.getElementById('mouse-effect');
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

addEventListener('mousemove', (e) => {
    const [mouseX, mouseY] = [e.clientX, e.clientY]

    div_mouse_effect.style.left = `${mouseX}px`;
    div_mouse_effect.style.top = `${mouseY}px`;

})

toggle.onclick = () => {
    toggle.classList.toggle('toggle-active')
    menu.classList.toggle('menu-active')
}
