
export class Validator {

    value: string | number;
    errors: string[];

    constructor(value: string | number) {
        this.value = value;
        this.errors = [];
    }

    typeCheck (type: string) {

        if ((typeof this.value) !== type) {

            this.errors.push(`Entry must be of type ${type}.`)

        }


        return this;
    }

    minValue (minimum: number) {

        if (this.value < minimum) {

            this.errors.push(`Entry must be larger than ${this.value}.`)
        }

        return this;


    }

    maxValue (maximum: number) {

        if (this.value > maximum) {

            this.errors.push(`Entry must be lower than ${this.value}.`)
        }

        return this;

    }
    minLength (minimum: number) {


        if (`${this.value}`.length < minimum) {

            this.errors.push(`Entry must be longer than ${minimum} characters.`)
        }


        return this;


    }

    maxLength (maximum: number) {

        if (`${this.value}`.length > maximum) {

            this.errors.push(`Entry must be shorter than ${maximum} characters.`)
        }

        return this;

    }

    allowAlphaNumericOnly(){

        if ((typeof this.value) !== "string" || !this.value || this.value === "") {

            return this

        }

        var format = /^[a-zA-Z0-9._]+$/;

        if (!format.test(`${this.value}`)) {

            this.errors.push(`Entry must only contain letters, numbers, periods, and underscores.`)
            
        } 

        return this;
    }

    required(){

        if (!this.value || this.value === "") {

            this.errors.push(`Entry is required.`)
            
        } 

        return this;
    }

    get getErrors() {

        return this.errors;
    }

    set setValue(value: string | number) {

        this.value = value;

    }

    clearErrors() {

        this.errors = [];
    }




}

