const router = require('express').Router()
const Users = require('./users-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req, res, next) => {
    try {
        const user = req.body.user
        const hash = bcrypt.hashSync(user.password, 8)
        user.password = hash
        const newUser = await Users.putUser(user)
        console.log(newUser)
        if (newUser) {
            res.status(201).json(newUser)
        } else {
            res.status(401).json({message: "Invalid Credentials"})
        }
        
    } catch (err) {
    next(err)        
    }
})
router.post('/login', async (req, res, next) => {
    try {
        const user = req.body
        const oldUser = await Users.getByUsername(user.username) 
        if (oldUser && bcrypt.compareSync(user.password, oldUser.password)) {
            const token = buildToken(oldUser)
            res.status(200).json({...oldUser, token: token})
        } else {
            res.status(401).json({message: "invalid creds"})
        }
    } catch (err) {
        next(err)
    }
})

function buildToken(user) {
    const payload = {
        subject: user.user_id,
        role_id: user.role_id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, "psst", options)
}

router.use((err, req, res, next) => {
    res.status(500).json({message: "we messed up somewhere"})
})

module.exports = router