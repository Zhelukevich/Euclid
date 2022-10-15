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
})

