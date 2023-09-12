class Form {
    
    constructor(key, errorInstance = null) {
        this._error = errorInstance
        this._keyLS = key
    }
    
    get error() {
        return this._error
    }
    
    // Check if empty
    validate(input) {
        // If the field value is empty or null
        // Return false
        // Else true
        return !input.value ? false : true
    }
    
    // Check if email is valid
    checkEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }
    
    // Check if date is valid
    checkDate(date) {
        return /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/.test(date)
    }
    
    // Check if time is valid
    //validates strings in time format HH:mm with hour in 24h format :
    
    checkTime(time) {
        return /^(([0-1]{0,1}[0-9])|(2[0-3])):[0-5]{0,1}[0-9]$/.test(time)
    }
    
    // Check if phone is valid
    checkPhone(phone) {
        return /0[0-9]{9}/.test(phone)
    }
    
    // Save in LS
    saveToLS(reservation) {
        const reservations = this.getFormLS()
        // Add new reservation
        reservations.push(reservation)
        // Registration in the localstorage via the class key
        localStorage.setItem(this._keyLS, JSON.stringify(reservations))
    }
    
    // Get the LS's content
    // Decodes data
    // If data exist (!= null/false/'') => return data
    // Otherwise we return an empty table (to simplify future additions)
    getFormLS() {
        return JSON.parse(localStorage.getItem(this._keyLS)) || []
    }
}

export default Form