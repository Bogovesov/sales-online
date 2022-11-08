const { Contract } = require('../models/models');

class ContractService {
    async create(contract) {
        const createdContract = await Contract.create(contract);
        return createdContract;
    }

    async isExist(name) {
        const contract = await Contract.findOne({ where: { name } });
        return contract;
    }

    async getAll() {
        const contracts = await Contract.findAll();
        return contracts;
    }

    async getOne(id) {
        const contract = await Contract.findOne({ where: { 'anum': id } });
        return contract;
    }

    async deleteOne(id) {
        const count = await Contract.destroy({ where: { 'anum': id } });
        return count;
    }

    async deleteAll() {
        const count = await Contract.destroy({
            where: {},
            truncate: true
        });
        return count;
    }
}

module.exports = new ContractService();
