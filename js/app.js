let $=document
let addBookBtn=$.querySelector('.add-btn')
let titleinputElem=$.querySelector('#title')
let authorinputElem=$.querySelector('#author')
let yearinputElem=$.querySelector('#year')
let booksContainer=$.querySelector('#book-list')

let books=[]

addBookBtn.addEventListener('click',function(event){
    event.preventDefault()
    let titleinputElemValue=titleinputElem.value;
    let authorinputElemValue=authorinputElem.value
    let yearinputElemValue=yearinputElem.value

    if(titleinputElemValue==='' || authorinputElemValue==='' || yearinputElemValue===''){
        alert('لطفا همه فیلدها را پر کنید')
    }else{
        let newBookObj={
            id:books.length+1,
            title:titleinputElemValue,
            author:authorinputElemValue,
            year:yearinputElemValue
        }
        books.push(newBookObj)
        setLocalatorage(books)
        makeEmptyInput()
    }
})
function booksGenerator(allBooksArray){
    booksContainer.innerHTML=''
    allBooksArray.forEach(book => {
        booksContainer.insertAdjacentHTML('beforeend',`<tr>
        <th>${book.title}</th>
        <th>${book.author}</th>
        <th>${book.year}</th>
      </tr>`)
    });
}
function setLocalatorage(allBooksArray){
    localStorage.setItem('books',JSON.stringify(allBooksArray))
    booksGenerator(allBooksArray)
}
function makeEmptyInput(){
    titleinputElem.value=''
    authorinputElem.value=''
    yearinputElem.value=''
}
function getBooksFromLocalstorage(){
    let localStorageBooks=localStorage.getItem('books')
    if(localStorageBooks){
        books=JSON.parse(localStorageBooks)
        booksGenerator(books)
    }
}

window.addEventListener('load',getBooksFromLocalstorage)
