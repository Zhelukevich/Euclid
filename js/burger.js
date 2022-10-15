window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burgerNav ').classList.toggle('burger-nav')
  })
  document.querySelector('#burgerNav__exit').addEventListener('click', function () {
    document.querySelector('#burgerNav').classList.toggle('burger-nav')
  })

})
