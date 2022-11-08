const {Product} = require('../models/models');

class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product);
        return createdProduct;
    }

    async isExist(name) {
        const order = await Product.findOne({where: {name}});
        return order;
    }

    async getAll(query) {
        const {orderId} = query;
        const products = await Product.findAll(orderId ? {where: {'ZID': +orderId}} : {});
        return products;
    }

    async getOne(id) {
        const product = await Product.findOne({where: {'anum': id}});
        return product;
    }

    async deleteOne(id) {
        const count = await Product.destroy({where: {'anum': id}});
        return count;
    }

    async deleteAll() {
        const count = await Product.destroy({
            where: {},
            truncate: true
        });
        return count;
    }
}

module.exports = new ProductService();
