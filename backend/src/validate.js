const Validator = require("validatorjs");
const validator = (body, rules, customMessage, callback) => {
    const validation = new Validator(body, rules, customMessage);
    validation.passes(() => callback(null, true)); // true
    validation.fails(() => callback(validation.errors, false)); // false
};

module.exports = validator;