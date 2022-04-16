// document object model

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('#sub-hello')

// console.dir(heading.textContent)
setTimeout(()=>{
    heading.textContent = 'Changed from JavaScript!'
},5000)

function addStylesTo(node){

}




