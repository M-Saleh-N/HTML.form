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
const lastName = document.getElementById("lastName")
const email = document.getElementById("Email")
const submitBtn = document.getElementById("submitBtn")

firstName.addEventListener("change", (e) => {
    const name = e.target.value
    details.firstName = name
    console.log(e.target.value)
})

lastName.addEventListener("change", (e) => {
    const name = e.target.value
    details.lastName = name 
    console.log(e.target.value)
})

email.addEventListener("change", (e) => {
    const name = e.target.value
    details.email = name
    console.log(e.target.value)
})

phoneNumber.addEventListener("change", (e) => {
    const phoneNumber = e.target.value
    details.phoneNumber = phoneNumber
    console.log(e.target.value)
    // Using regular expression, validate if the number is a valid kenyan number
    // if it's not, using the alert function, notify the user that the
//number is not valid
})
// Add event listeners for all remaining input elements and update the
//details object

function validatePassword(str1, str2) {
    // Confirm password and confirm password are the same
    // return a boolean if the password match
}
// Style your HTML FORM!!!!
submitBtn.addEventListener("click", () => {
    const { firstName, lastName, email, password, phoneNumber,
confirmPassword, agreeTerms} = details

    validatePassword(password, confirmPassword)
    
})
