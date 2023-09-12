class MyError {
    constructor() {
        this._message = null
    }
    
    set message(erreur) {
        this._message = erreur
    }
    
    get message() {
        return this._message
    }
}

export default MyError
