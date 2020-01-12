class Valid2 extends Valid {
    constructor(a, b, c, d, e) {
        super(a, b, c);
        this.emailError = d;
        this.passwordError = e;
    }

    validate() {
        this.isValid = false;
        if (this.password.length >= 6) {
            this.isValid = true;
        }
        this.emailError = '';
        this.passwordError = '';
        if (this.email.trim() == '') {
            this.isValid = false;
        }
        if (this.isValid == false) {
            this.emailError = 'email empty';
            this.passwordError = 'min length 6';
        }
    }
}