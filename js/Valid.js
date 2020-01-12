class Valid {
    constructor(a, b, c) {
        this.email = a;
        this.password = b;
        this.isValid = c;
    }

    validate() {
        this.isValid = false;
        if (this.password.length >= 6) {
            this.isValid = true;
        }
    }
}