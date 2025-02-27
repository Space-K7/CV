// Приклад додавання класу fade-in до секції about при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    aboutSection.classList.add('fade-in');
  });
  
  // Додайте обробку форми зворотного зв'язку, якщо потрібно
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
  
    // Тут можна додати код для відправки даних форми на сервер
    // Наприклад, за допомогою fetch API
  
    console.log('Ім\'я:', name);
    console.log('Email:', email);
    console.log('Повідомлення:', message);
  
    // Очищення форми після відправки
    form.reset();
  });