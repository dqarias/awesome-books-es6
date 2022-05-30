/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Storage from './storage.js';

export default class Render {
  static displayLibrary = () => {
    const bookArray = Storage.getBooks();
    bookArray.forEach((book) => Render.renderData(book));
  }

  static renderData = (book) => {
    const template = `<li class="render-li">
        <div class="li__first"> <span>"${book.titleValue}"</span> by <span>${book.authorValue}</span></div>
        <button class="removeButton">Remove</button>
        </li>`;
    document.querySelector('.bookList').insertAdjacentHTML('afterbegin', template);
  }

  static removUI = (book) => {
    if (book.classList.contains('removeButton')) {
      book.parentNode.remove();
    }
  }

  static clearField = () => {
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}
