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

    async isExistId(id) {
        const item = await Contract.findOne({ where: { 'anum': id } });
        return item;
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

    async updateOne(contract, id) {
        const existedId = await this.isExistId(id);
        if (!existedId) {
            throw new Error('contract is not exist');
        }

        const data = {
            cid: contract.cid,
            DateOpen: contract.DateOpen,
            OrdNmr: contract.OrdNmr,
            DateClose: contract.DateClose,
            DateDisp: contract.DateDisp,
            DateStore: contract.DateStore,
            Finish: contract.Finish,
            _Add: contract._Add,
        };

        const count = await Contract.update(data, { where: { 'anum': id } });
        return count;
    }
}

module.exports = new ContractService();
