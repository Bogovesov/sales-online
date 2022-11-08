const { User} = require('../models/models');

class UserService {
    async create(user) {
        const createdUser = await User.create(user);
        return createdUser;
    }

    async isExist(name) {
        const user = await User.findOne({ where: { name } });
        return user;
    }

    async getAll() {
        const users = await User.findAll();
        return users;
    }

    async getOne(id) {
        const user = await User.findOne({ where: { 'anum': id } });
        return user;
    }

    async deleteOne(id) {
        const count = await User.destroy({ where: { 'anum': id } });
        return count;
    }

    async deleteAll() {
        const count = await User.destroy({
            where: {},
            truncate: true
        });
        return count;
    }
}

module.exports = new UserService();
