import { describe, it, expect } from 'vitest';
import { Validator } from './validateInput';

describe("Validator test", () => {

    const testValidator = new Validator("");

    it("It should return type error, check for type string. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = 10;

        const errors = testValidator.typeCheck("string")

        expect(JSON.stringify(errors)).toBe(JSON.stringify({ "value": 10, "errors": ["Entry must be of type string."] }))

    })

    it("It should return no error, check for type number. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = 10;

        const errors = testValidator.typeCheck("number")

        expect(JSON.stringify(errors)).toBe(JSON.stringify({ "value": 10, "errors": [] }))

    })

    it("It should return type, min length, and min value errors. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = 10;

        const errors = testValidator.typeCheck("string").minLength(3).minValue(11);

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":10,"errors":["Entry must be of type string.","Entry must be longer than 3 characters.","Entry must be larger than 10."]}))

    })

    it("It should return type, max length, and max value errors. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = 10;

        const errors = testValidator.typeCheck("string").maxLength(1).maxValue(9);

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":10,"errors":["Entry must be of type string.","Entry must be shorter than 1 characters.","Entry must be lower than 10."]}))

    })

    it("It should return allowAlphaNumericOnly error. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = "username@#";

        const errors = testValidator.allowAlphaNumericOnly();

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"username@#","errors":["Entry must only contain letters, numbers, periods, and underscores."]}))

    })

    it("It should return type, max length, and max value errors. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = "username@#";

        const errors = testValidator.allowAlphaNumericOnly();

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"username@#","errors":["Entry must only contain letters, numbers, periods, and underscores."]}))

    })

    it("It should return no error, test allowAlphaNumericOnly. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = "username";

        const errors = testValidator.allowAlphaNumericOnly();

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"username","errors":[]}))

    })

    it("It should return errors, type, max length, and allowAlphaNumericOnly errors. Then no errors. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = "us&rn@me&";

        const errors = testValidator.maxLength(3).allowAlphaNumericOnly();

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"us&rn@me&","errors":["Entry must be shorter than 3 characters.","Entry must only contain letters, numbers, periods, and underscores."]}))

        errors.clearErrors();
                
        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"us&rn@me&","errors":[]}))

    })

    it("It should return errors, entry is required. ", () => {

        testValidator.clearErrors();

        testValidator.setValue = "";

        const errors = testValidator.required();

        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"","errors":["Entry is required."]}))

        errors.clearErrors();
                
        expect(JSON.stringify(errors)).toBe(JSON.stringify({"value":"","errors":[]}))

    })

})