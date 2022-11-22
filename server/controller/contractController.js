const ContractService = require('../service/ContractService');
const ApiError = require('../error/ApiError');
const { validationResult, body } = require('express-validator');

class ProductController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const candidate = await ContractService.isExist(req.body.name);
            if (candidate) {
                return next(ApiError.conflict('contract already exist'))
            }

            const product = await ContractService.create(req.body);
            res.json(product);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const products = await ContractService.getAll(req.query);
            return res.json(products);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const product = await ContractService.getOne(id);
            return res.json(product);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const count = await ContractService.deleteOne(id);
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const count = await ContractService.deleteAll();
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const updatedItem = await ContractService.updateOne(req.body, id);
            return res.json(updatedItem);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async update(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            req.body.forEach(async item => {
                await ContractService.updateOne(item, item.anum); 
            });
            return res.json(req.body);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new ProductController();