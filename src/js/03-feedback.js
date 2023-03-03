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
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  console.log(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
}

const formData = {};

function onTextareaInput(e) {
  //console.log(e.target.name);
  formData[e.target.name] = e.target.value;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  //console.log(formData);
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  //console.log(savedData);
  const parsedData = JSON.parse(savedData);
  //console.log(parsedData);

  if (savedData) {
    refs.textarea.value = parsedData.message;
    refs.input.value = parsedData.email;

  }
}
