document.addEventListener('DOMContentLoaded', function(){
  console.log('DOM is loaded')
  console.log('This app uses Semantic UI for styling')
  document.querySelector('form').addEventListener("submit", addingCat)
  fetchHobbies()
  fetchCats()
})

