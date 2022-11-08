const ProductService = require('../service/ProductService');
const ApiError = require('../error/ApiError');
const {validationResult} = require('express-validator');

class ProductController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }

            const candidate = await ProductService.isExist(req.body.name);
            if (candidate) {
                return next(ApiError.conflict('product already exist'))
            }

            const product = await ProductService.create(req.body);
            res.json(product);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const products = await ProductService.getAll(req.query);
            return res.json(products);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;
            const product = await ProductService.getOne(id);
            return res.json(product);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const {id} = req.params;
            const count = await ProductService.deleteOne(id);
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const count = await ProductService.deleteAll();
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new ProductController();