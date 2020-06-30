/** @format */
// it check the if user is logged in or not
class Auth {
    constructor() {
        this.authenticated = false;
    }
    //set authenticated true after login
    login(cb) {
        if (!localStorage.authenticated) {
            this.authenticated = true;
            //when reloading page authenticated value changed to false. to prevent this authenticated value is stored to localstorage
            localStorage.setItem('authenticated', true);
        }

        cb();
    }
    //set authenticated false after login
    logout(cb) {
        this.authenticated = false;
        cb();
    }
    // return current  value of authenticated
    isAuthenticated() {
        // before returning value of authenticated it value is restored from localStorage.
        this.authenticated = localStorage.authenticated;
        return this.authenticated;
    }
}
// exporting single object of Auth
export default new Auth();
