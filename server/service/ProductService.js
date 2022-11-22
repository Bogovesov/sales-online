const { Product } = require('../models/models');

class ProductService {
    async create(product) {
        const createdProduct = await Product.create(product);
        return createdProduct;
    }

    async isExist(name) {
        const product = await Product.findOne({ where: { name } });
        return product;
    }

    async isExistId(id) {
        const product = await Product.findOne({ where: { 'anum': id } });
        return product;
    }

    async getAll(query) {
        const { orderId } = query;
        const products = await Product.findAll(orderId ? { where: { 'ZID': +orderId } } : {});
        return products;
    }

    async getOne(id) {
        const product = await Product.findOne({ where: { 'anum': id } });
        return product;
    }

    async deleteOne(id) {
        const count = await Product.destroy({ where: { 'anum': id } });
        return count;
    }

    async deleteAll() {
        const count = await Product.destroy({
            where: {},
            truncate: true
        });
        return count;
    }

    async updateOne(product, id) {

        const existProduct = await this.isExistId(id);
        if (!existProduct) {
            throw new Error('product is not exist');
        }

        const data = {
            Code: product.Code,
            Cnt: product.Cnt,
            Perc: product.Perc,
            ExWpc: product.ExWpc,
            ExWpcs: product.ExWpcs,
            GRNpc: product.GRNpc,
            GRNpcs: product.GRNpcs,
            Term: product.Term,
            Date: product.Date,
            CID: product.CID,
            ContrDate: product.ContrDate,
            Chk: product.Chk,
            Finish: product.Finish,
            _Add: product._Add,
            Var: product.Var,
            StoreDate: product.StoreDate,
            Ch1: product.Ch1,
        };

        const count = await Product.update(data, { where: { 'anum': id } });
        return count;
    }
}

module.exports = new ProductService();