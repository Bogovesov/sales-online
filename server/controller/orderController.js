const OrderService = require('../service/OrderService');
const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator');

class OrderController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const candidate = await OrderService.isExist(req.body.name);
            if (candidate) {
                return next(ApiError.conflict('oredr already exist'))
            }

            const order = await OrderService.create(req.body);
            res.json(order);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const orders = await OrderService.getAll(req.query);
            return res.json(orders);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const order = await OrderService.getOne(id);
            return res.json(order);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const count = await OrderService.deleteOne(id);
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const count = await OrderService.deleteAll();
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const updatedItem = await OrderService.updateOne(req.body, id);
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
                await OrderService.updateOne(item, item.anum); 
            });
            return res.json(req.body);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new OrderController();