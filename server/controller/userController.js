const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserService = require('../service/UserService')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {
            id, email, role
        },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { name, email, password, age, role } = req.body
        /* if (!email || !password) {
             return next(ApiError.badRequest('Incorrect email or password'))
         }*/

        const candidate = await UserService.isExist(name)
        if (candidate) {
            return next(ApiError.badRequest('User with the name already exist'))
        }


        const user = await UserService.create(req.body);

        const token = generateJwt(user.id, user.email, user.role)
        return res.json(user)
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('User not found'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Wrong password'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }

    async getAll(req, res, next) {
        const users = await UserService.getAll();
        return res.json(users)
    }
}

module.exports = new UserController()