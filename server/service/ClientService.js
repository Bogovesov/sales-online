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

    async isExistId(id) {
        const item = await Client.findOne({ where: { 'anum': id } });
        return item;
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

    async updateOne(client, id) {
        const existedId = await this.isExistId(id);
        if (!existedId) {
            throw new Error('client is not exist');
        }

        const data = {
            name: client.name,
            phone: client.phone,
            mail: client.mail,
            rem: client.rem,
            id_client: client.id_client,
        };

        const count = await Client.update(data, { where: { 'anum': id } });
        return count;
    }
}

module.exports = new ClientService();
