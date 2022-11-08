const CompanyService = require('../service/CompanyService');
const ApiError = require('../error/ApiError');
const {validationResult} = require('express-validator');

class CompanyController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const candidate = await CompanyService.isExist(req.body.name);
            if (candidate) {
                return next(ApiError.conflict('company already exist'))
            }

            const client = await CompanyService.create(req.body);
            res.json({client});
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const clients = await CompanyService.getAll(req.query);
            return res.json(clients);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const client = await CompanyService.getOne(id);
            return res.json(client);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const {id} = req.params;
            const count = await Client.destroy({where: {'anum': id}});
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const count = await Client.destroy({
                where: {},
                truncate: true
            });
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new CompanyController();