const copyBtn = document.querySelector('[data-js="copyBtn"]')

copyBtn.addEventListener('click', () => {
  const textCopy = copyBtn.previousElementSibling.textContent
  navigator.clipboard.writeText(textCopy)
})


const moreMenuBtn = document.querySelector('[data-js="moreBtn"]')
const moreMenu = document.querySelector('[data-js="moreMenu"]')

moreMenuBtn.addEventListener('click', () => {
 const menu =  moreMenuBtn.classList.toggle('rotate-180')

 if(menu) {
    moreMenu.classList.remove('invisible')
    moreMenu.classList.add('h-full')
 }else{
   moreMenu.classList.add('invisible')
   moreMenu.classList.add('h-0')
   moreMenu.classList.remove('h-full')
 }
})



