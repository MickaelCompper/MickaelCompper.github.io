class Form {

    constructor(key, errorInstance = null) {
        // Possibilté de faire de la composition avec la classe MyError
        this._error = errorInstance
        this._keyLS = key
    }
    
    // Getter/Setter
    get error() {
        return this._error
    }

    // Check if empty
    validate(input) {
        // Si la valeur du champ est vide ou null
        // On renvoi false
        // Sinon on renvpoi true
        return !input.value ? false : true
    }

    // Check if email is valid
    checkEmail(email) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    }

    // Save
    saveToLS(contact) {
        // Get old Datas
        // Short TernR
        // On get le contenu du LS
        // On décode la data
        // Si la data exist (!= null/false/'') => on renvoi data
        // Sinon on renvoi un tableau vide (pour simplifier les futurs ajouts)
        const contacts = this.getFormLS()
        // Ajout du nouveau contact
        contacts.push(contact)
        // Enregistrement dans le localstorage via la clé de la classe
        localStorage.setItem(this._keyLS, JSON.stringify(contacts))
    }

    // Get
    getFormLS() {
        return JSON.parse(localStorage.getItem(this._keyLS)) || []
    }
}

export default Form
// https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/https://www.geeksforgeeks.org/difference-between-local-storage-session-storage-and-cookies/