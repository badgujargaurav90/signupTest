const commonHelper = require("../helper/commonHelper");
const { signupCustomer } = require("../model/customers");

var customerController = {
    signup(req,res){
        try {
            const user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                isSubscribed: req.body.isSubscribed
            };
            signupCustomer(user, (error,customerResponse) =>{
                if (error) {
                    var response = commonHelper.commonMsg("failure","Something went wrong!",null,error);
                    res.status(500).send(response);
                } else {
                    var response = commonHelper.commonMsg("success","",customerResponse,null);
                    res.status(200).send(response);
                }
            })
        } catch (error) {
            var response = commonHelper.commonMsg("failure","Something went wrong!",null,error);
            res.status(500).send(response);
        }
    }
}

module.exports = customerController;