const Users = require('./users-model')

function restricted(req, res, next) {
    try {
        const user = req.body
        if (user.user.role_id !== 2 ||3) {
            res.status(400).json({message: "restricted access!"})
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    restricted
}
