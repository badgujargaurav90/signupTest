const createHttpError = require('http-errors')
//* Include joi to check error type 
const Joi = require('joi')
const commonHelper = require('../helper/commonHelper')
//* Include all validators
const Validators = require('../validators')

module.exports = function(validator) {
    if(!Validators.hasOwnProperty(validator))
        throw new Error(`'${validator}' validator is not exist`)

    return async function(req, res, next) {
        try {
            const validated = await Validators[validator].validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            if(err.isJoi) 
                var response = commonHelper.commonMsg("validation-err",{},null,{message: err.message});
                return next(response)
            next(createHttpError(500))
        }
    }
}