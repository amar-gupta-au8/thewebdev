const User = require('../models/User')

exports.login = function (req, res)  {
    let user = new User(req.body)
    user.login((result)=>{
        res.send(result)
    })
}

exports.logout = () => {
    
}

exports.register = function (req, res)  {
    let user= new User(req.body)
    user.register
    if (user.errors.length) {
        res.send(user.errors)
    } else {
        res.send('congrates')
    }
}
exports.home = (req, res) => {
    res.render('home-guest')
}