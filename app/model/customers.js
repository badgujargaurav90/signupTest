var db=require('../../config');

module.exports.signupCustomer = (userDetail, cb)=>{
    
    let sqlQuery = "INSERT INTO user SET ?";
    let query = db.query(sqlQuery, userDetail,(err, results) => {
        if(err){
            cb(err, null)
        } else {
            var responseObject = {
                insertedId: results.insertId,
                responseMsg: userDetail.isSubscribed ? `Hello ${userDetail.firstName} ${userDetail.lastName}, Thank you for signing up. Your account is now created. You would be receiving our periodic newsletters to your email: ${userDetail.email}` : `Hello ${userDetail.firstName} ${userDetail.lastName}, Thank you for signing up. Your account is now created`
            }
            
            cb(null, responseObject)
        }
    });   
}