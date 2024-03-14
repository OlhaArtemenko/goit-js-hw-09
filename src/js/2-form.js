// Отримуємо доступ до елементів форми
const feedbackForm = document.querySelector('.feedback-form');

// Завантажуємо стан форми з локального сховища при завантаженні сторінки
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  feedbackForm.elements.email.value = email;
  feedbackForm.elements.message.value = message;
}

// Делегування обробки події введення форми
feedbackForm.addEventListener('input', function (event) {
  // Зберігаємо стан форми в локальному сховищі
  const currentData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentData));
});

// Обробка події відправлення форми
feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Отримуємо поточні значення полів перед їх очищенням
  const formData = {
    email: feedbackForm.elements.email.value.trim(),
    message: feedbackForm.elements.message.value.trim(),
  };

  // Очищення локального сховища та полів форми
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();

  // Виведення даних форми в консоль
  console.log(formData);
});
