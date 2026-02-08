// Находим кнопку и звук
const button = document.getElementById('clickBtn');
const sound = document.getElementById('heartSound');

// Слушаем клики по странице
document.addEventListener('click', e => {
    // Если клик по кнопке — ничего не делаем
    const rect = button.getBoundingClientRect();
    if (
        e.clientX > rect.left && e.clientX < rect.right &&
        e.clientY > rect.top && e.clientY < rect.bottom
    ) return;

    // Создаём сердечко там, где кликнули
    createHeart(e.clientX, e.clientY);

    // Проигрываем звук
    sound.currentTime = 0;
    sound.play();
});

// Функция создания сердечка
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';

    // Немного случайного смещения, чтобы не всё в одной точке
    const offsetX = (Math.random() - 0.5) * 50;
    const offsetY = (Math.random() - 0.5) * 50;

    heart.style.left = `${x + offsetX}px`;
    heart.style.top = `${y + offsetY}px`;

    document.body.appendChild(heart);

    // Удаляем сердечко через секунду (когда анимация закончится)
    setTimeout(() => {
        heart.remove();
    }, 1000);
}
