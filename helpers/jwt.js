const expressJwt = require('express-jwt')
const secret = "x"

function jwt(){
    return expressJwt({secret,algorithms:['HS256']}).unless({
        path : [
            '/api/user/login', // bizim izin verdiğimiz yol , bu yola erişim var
            '/api/user/register'
        ]
    })
}

module.exports = jwt