const { Client } = require('../models/models');

class ClientService {
    async create(client) {
        const createdClient = await Client.create(client);
        return createdClient;
    }


    async isExist(name) {
        const candidate = await Client.findOne({ where: { name } });
        return candidate;
    }

    async getAll(query) {
        const { limit, companyId } = query;
        const clients = await Client.findAll(limit ? { limit: +limit, order: [['anum', 'DESC']] } : {});
        return clients;
    }

    async getOne(id) {
        const client = await Client.findOne({ where: { 'anum': id } });
        return client;
    }

    async deleteOne(id) {
        const count = await Client.destroy({ where: { 'anum': id } });
        return count;
    }

    async deleteAll() {
        const count = await Client.destroy({
            where: {},
            truncate: true
        });
        return count;
    }
}

module.exports = new ClientService();
