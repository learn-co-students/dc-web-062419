console.log("connected")
//What if we move the script tag in index.html...

function addInstructor(firstName, lastName, email){
  let tbodyEl = document.querySelector("tbody")
  tbodyEl.innerHTML += `
        <tr>
          <td class="firstName">${firstName}</td>
          <td class="lastName">${lastName}</td>
          <td class="email">${email}</td>
        </tr>`
}

// function addInstructor(firstName, lastName, email){
//   let trEl = document.createElement("tr")
//   let tbodyEl = document.querySelector("tbody")
//   tbodyEl.appendChild(trEl)
//
//   let firstNameEl = document.createElement("td")
//   trEl.appendChild(firstNameEl)
//   firstNameEl.innerText = firstName
//   firstNameEl.classList.add("firstName")
//
//   let lastNameEl = document.createElement("td")
//   trEl.appendChild(lastNameEl)
//   lastNameEl.innerText = lastName
//   lastNameEl.classList.add("lastName")
//
//   let emailEl = document.createElement("td")
//   trEl.appendChild(emailEl)
//   emailEl.innerText = email
//   emailEl.classList.add("email")
// }
