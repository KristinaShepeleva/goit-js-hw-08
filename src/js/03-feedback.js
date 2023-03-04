import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form  textarea'),
  input: document.querySelector('.feedback-form  input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.textarea.value && refs.input.value) {

  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  Object.getOwnPropertyNames(formData).forEach(key => (delete formData[key]));
  } 
}

const formData = {};

function onFormInput(e) {
  formData[e.target.name] = e.target.value;    
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);

  if (localStorage.getItem(STORAGE_KEY)) {
    refs.input.value = parsedData.email || '';
    refs.textarea.value = parsedData.message || '';
  }
}








//const STORAGE_KEY = 'feedback-msg';

//const refs = {
//  form: document.querySelector('.js-feedback-form'),
//  textarea: document.querySelector('.js-feedback-form  textarea'),
//};

//refs.form.addEventListener('submit', onFormSubmit);
//refs.textarea.addEventListener('input', throttle(onTextareaInput, 200));

//populateTextarea();

/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */
//function onFormSubmit(evt) {
//  evt.preventDefault();

 // console.log('Отправляем форму');
 // evt.currentTarget.reset();
//  localStorage.removeItem(STORAGE_KEY);
//}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */
//function onTextareaInput(evt) {
 // const message = evt.target.value;

//  localStorage.setItem(STORAGE_KEY, message);
//}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */
//function populateTextarea() {
//  const savedMessage = localStorage.getItem(STORAGE_KEY);

//  if (savedMessage) {
 //   refs.textarea.value = savedMessage;
//  }
//}

// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
