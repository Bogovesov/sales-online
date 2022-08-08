const { Client } = require('../models/modelsSales');
const ClientService = require('../service/ClientService');
const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator');

class ClientController {
    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const candidate = await ClientService.isExist(req.body.name);
            if (candidate) {
                return next(ApiError.conflict('client already exist'))
            }

            const client = await ClientService.create(req.body);
            res.json(client);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
            const clients = await ClientService.getAll();
            return res.json(clients);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const client = await ClientService.getOne(id);
            return res.json(client);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const count = await ClientService.deleteOne(id);
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteAll(req, res, next) {
        try {
            const count = await ClientService.deleteAll();
            return res.json(count);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new ClientController();