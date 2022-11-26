const ProductService = require('../../service/ProductService');
const ApiError = require('../../error/ApiError');
const { validationResult, body } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

let items = {};
class QuoteController {

    async create(req, res, next) {
        try {
            const id = uuidv4();

            items[id] = req.body;

            //const product = await ProductService.create(req.body);

            console.log('CREATE');
            res.json(items);
        } catch (e) {
            next(ApiError.internal(e.message))
        }
    }

    async getAll(req, res, next) {
        try {
          /*  let items = {
                "-NFPxEl8eb1PcWlBUkY0": {
                    "author": "alex",
                    "text": "some text"
                },
                "-NFPxOM2luARl8Dp2iFV": {
                    "author": "max",
                    "text": "test2"
                },
                "-NFPxq-UIAX0_B5oPwv8": {
                    "author": "222",
                    "text": "8888"
                },
                "-NHQSZY0yYspS4P1R5X2": {
                    "author": "alex",
                    "text": "lklklkl"
                }
            };*/
            console.log('GET');
            return res.json(items);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const product = await ProductService.getOne(id);
            return res.json(product);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
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

    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const updatedItem = await ProductService.updateOne(req.body, id);
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
                await ProductService.updateOne(item, item.anum);
            });
            return res.json(req.body);
        } catch (e) {
            next(ApiError.internal(e.message));
        }
    }
}

module.exports = new QuoteController();