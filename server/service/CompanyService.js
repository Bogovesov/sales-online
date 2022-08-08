const { Company } = require('../models/modelsSales');
const ApiError = require('../error/ApiError');

class CompanyService {
    async create(company) {
        const createdCompany = await Company.create(company);
        return createdCompany;
    }

    async isExist(name) {
        const company = await Company.findOne({ where: { name } })
        return company;
    }

    async getAll() {
        const companies = await Company.findAll();
        return companies;
    }
}

module.exports = new CompanyService();
