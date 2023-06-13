class MyError {
    constructor() {
        this._msg = null
    }

    set msg(erreur) {
        this._msg = erreur
    }

    get msg() {
        return this._msg
    }
}

export default MyError
