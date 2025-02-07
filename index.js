console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
}

const firstName = document.getElementById("firstName")
const submitBtn = document.getElementById("submitBtn")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const alertSpan= document.getElementById("alert-password")



firstName.addEventListener("change", (e) => {
    const name = e.target.value
    details.firstName = name
})

lastName.addEventListener("change", (e) => {
  const name = e.target.value
  details.lastName = name
})

email.addEventListener("change", (e) => {
  const email = e.target.value
  details.email = email
})

phoneNumber.addEventListener("change", (e) => {
    const phoneNumber = e.target.value
    details.phoneNumber = phoneNumber
    // Using regular expression, validate if the number is a valid kenyan number
    // if it's not, using the alert function, notify the user that the
    // number is not valid
})
// Add event listeners for all remaining input elements and update the
// details object

password.addEventListener("change", (e) => {
  const password = e.target.value
  details.password = password
})

confirmPassword.addEventListener("change", (e) => {
  const confirmPassword = e.target.value
  details.confirmPassword = confirmPassword
})


function validatePassword(str1, str2) {
    // Confirm password and confirm password are the same
    // return a boolean if the password match
    if(str1 === str2){
      return true
    }
    else{
      return false
    }
}
// Style your HTML FORM!!!!
submitBtn.addEventListener("click", () => {
    const { firstName, lastName, email, password, phoneNumber, confirmPassword, agreeTerms} = details
    const isValidated = validatePassword(password, confirmPassword)
    
    if (isValidated) {
        window.location.href = "/dashboard.html"
    } else {
        alertSpan.classList.remove("alert-off-message")
        alertSpan.classList.add("alert-on-message")
    }

    // alertSpan.classList.remove("alert-off-message")
    // alertSpan.classList.add("alert-on-message")
   
})