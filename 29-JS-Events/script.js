document.addEventListener( "DOMContentLoaded" , function(){
  console.log("DOM is loaded and ready")
  //adding event listeners to the email TDs
  let emailElements = document.querySelectorAll(".email")
  emailElements.forEach( (emailEl)=>{
    emailEl.addEventListener("click", sendingEmail )
  } )

  //adding event listener to the FORM
  let form = document.querySelector("form")
  form.addEventListener("submit", handleSubmit)

  //adding eventListener to each row
  let rows = document.querySelectorAll(".person")
  rows.forEach(row => {
    row.addEventListener("click", viewProfile)
  })
})

function viewProfile(e){
  console.log("viewing profile: ", e.currentTarget.innerText)
}

function sendingEmail(e){
  console.log("sending email to: ", e.target.innerText)
}

function handleSubmit(e){
  e.preventDefault()
  let fn = document.querySelector("#firstNameInput").value
  let ln = document.querySelector("#lastNameInput").value
  let em = document.querySelector("#emailInput").value
  addInstructor(fn, ln, em)
}

function addInstructor(firstName, lastName, email){
  let trEl = document.createElement("tr")
  let tbodyEl = document.querySelector("tbody")
  tbodyEl.appendChild(trEl)

  let firstNameEl = document.createElement("td")
  trEl.appendChild(firstNameEl)
  firstNameEl.innerText = firstName
  firstNameEl.classList.add("firstName")

  let lastNameEl = document.createElement("td")
  trEl.appendChild(lastNameEl)
  lastNameEl.innerText = lastName
  lastNameEl.classList.add("lastName")

  let emailEl = document.createElement("td")
  trEl.appendChild(emailEl)
  emailEl.innerText = email
  emailEl.classList.add("email")
  emailEl.addEventListener("click", sendingEmail)
}
