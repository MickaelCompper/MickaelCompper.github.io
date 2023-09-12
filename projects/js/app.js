// Import Class
import Form from './class/Form.js'
import MyError from './class/MyError.js'

// Listen DOM
document.addEventListener('DOMContentLoaded', function () {
  
  // Listen Form Submit
  document.querySelector('form').addEventListener('submit', function (event) {
    
    event.preventDefault()
    const $inputs = this.querySelectorAll('input')
    const $textarea = document.getElementById('request')
    
    // Manage errors
    const error = new MyError
    
    // Get Form Class to validate fields
    const form = new Form('reservation', error)
    
    // reservation form
    const reservation = { date: null, time: null, guests:null, name: null, email: null, phone: null, request: null }
    
    // Loop inputs
    $inputs.forEach(input => {
      if (form.validate(input)) {
        // Add property to reservation
        // Check which property
        if(input.id === 'date'){
          form.checkDate(input.value) ? reservation.date = input.value : form.error.message = input.id
        }
        else if (input.id === 'time') {
          form.checkTime(input.value) ? reservation.time = input.value : form.error.message = input.id
        }
        else if (input.id === 'guests') {
          (parseInt(input.value) > 0) ? reservation.guests = parseInt(input.value) : form.error.message = input.id
        }
        else if (input.id === 'name') {
          reservation.name = input.value
        }
        else if (input.id === 'email') {
          form.checkEmail(input.value) ? reservation.email = input.value : form.error.message = input.id
        }
        else if (input.id === 'phone') {
          form.checkPhone(input.value) ? reservation.phone = input.value : form.error.message = input.id
        }
      }
      else {
        // Reference Error
        // Hydratation of property `message` de l'instance de `MyError`
        form.error.message = 'empty'
      }
    })
    
    //textarea
    $textarea.textLength <= 250 ? reservation.request = $textarea.value : form.error.message = $textarea.id
    
    
    // Check if form is Valid
    if (form.error.message === null) {
      // Save reservation to LS
      form.saveToLS(reservation)
      
      // Display all reservations
      const reservations = form.getFormLS()
      
      // Template
      //resets the display to avoid duplicates
      document.querySelector('.reservations').innerHTML=('')
      
      //Display reservations in a list
      reservations.map(reservation => {
        document.querySelector('.reservations')
        .insertAdjacentHTML('beforeend', `<li>${reservation.name}</li>`)
      })
    }
    else {
      // Display error message
      document.querySelector('.error').textContent = form.error.message === 'empty' ? 'Not all fields are filled in' : `The field in error is : ${form.error.message}`
      // Timer of 3sec, to make the error message disappear
      setTimeout(() => {
        // Hidden display
        document.querySelector('.error').textContent = ''
        // Reset to null so as not to display an error during the next submission, if there is none
        this.error = null
      }, 3000)
    }
    // Empty the form after processing (Simulation of a click on a btn type=reset)
    this.reset()
  })
})
