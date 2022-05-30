export default class Storage {
  static getBooks() {
    let library;
    if (!localStorage.getItem('library')) {
      library = [];
    } else {
      library = JSON.parse(localStorage.getItem('library'));
    }
    return library;
  }

  static storeBooks = (book) => {
    const bookArray = Storage.getBooks();
    bookArray.push(book);
    localStorage.setItem('library', JSON.stringify(bookArray));
  }

  static removeBook = (book) => {
    const bookArray = Storage.getBooks();
    bookArray.forEach((arr) => {
      if (`"${arr.titleValue}" by ${arr.authorValue}`.trim() === book.trim()) {
        bookArray.splice(bookArray.indexOf(arr), 1);
      }
    });
    localStorage.setItem('library', JSON.stringify(bookArray));
  }
}
