window.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.how__step').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how__description').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('how__description-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__description-active')
    })
  })



  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burgerNav ').classList.toggle('burger-nav')
  })
  document.querySelector('#burgerNav__exit').addEventListener('click', function () {
    document.querySelector('#burgerNav').classList.toggle('burger-nav')
  })



  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },



    a11y: {
      paginationBulletMessage: 'перейти к слайду',
    },

  });




  $(".faq__accordion").accordion({
    heightStyle: "content"
  });

  $(function () {
    $(".faq__accordion").accordion({
      collapsible: true
    });
  });


  $(".faq__accordion").accordion({
    icons: false
  });

})

