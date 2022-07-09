'use strict'

module.exports = {
    commonMsg: function (status, msg, res, err) {
        var code;
        if (status === 'failure') code = 500;
        else if(status === "success") code = 200;
        else if(status === "no-record") code = 204;
        else if(status === "validation-err") code = 422;
        else if(status === "wrong-data") code = 535;

        var structuredResponse = {};
        structuredResponse['info'] = {}
        structuredResponse['data'] = {}
        structuredResponse['error'] = {}

        if (res) {
            res = JSON.stringify(res);
            res = JSON.parse(res);
            structuredResponse.data = res;
        } else if (err) {
            structuredResponse.error = err;
            structuredResponse.data.responseMsg = msg;
        }
        structuredResponse.info = {
            status: status,
            code: code
        }
        return structuredResponse;
    }
}