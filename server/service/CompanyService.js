const { Company } = require('../models/models');

class CompanyService {
    async create(company) {
        const createdCompany = await Company.create(company);
        return createdCompany;
    }

    async isExist(name) {
        const company = await Company.findOne({ where: { name } })
        return company;
    }

    async isExistId(id) {
        const item = await Company.findOne({ where: { 'anum': id } });
        return item;
    }

    async getAll(query) {
        const { limit } = query;
        const companies = await Company.findAll(limit ? { limit: +limit, order: [['anum', 'DESC']] } : {});
        return companies;
    }

    async getOne(id) {
        const company = await Company.findOne({ where: { 'anum': id } });
        return company;
    }

    async deleteOne(id) {
        const count = await Company.destroy({ where: { 'anum': id } });
        return count;
    }

    async deleteAll() {
        const count = await Company.destroy({
            where: {},
            truncate: true
        });
        return count;
    }

    async updateOne(company, id) {
        const existedId = await this.isExistId(id);
        if (!existedId) {
            throw new Error('company is not exist');
        }

        const data = {
            name: company.name,
            addr: company.phone,
            rem: company.rem,
        };

        const count = await Company.update(data, { where: { 'anum': id } });
        return count;
    }
}

module.exports = new CompanyService();
