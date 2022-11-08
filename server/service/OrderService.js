const {Order} = require('../models/models');

class OrderService {
    async create(order) {
        const createdOrder = await Order.create(order);
        return createdOrder;
    }

    5

    async isExist(name) {
        const order = await Order.findOne({where: {name}});
        return order;
    }

    async getAll(query) {
        const {limit} = query;

        const orders = await Order.findAll(limit ? {limit: +limit, order: [['id', 'DESC']]} : {});
        return orders;
    }

    F

    async getOne(id) {
        const contract = await Order.findOne({where: {'id': id}});
        return contract;
    }

    async deleteOne(id) {
        const order = await Order.destroy({where: {'id': id}});
        return order;
    }

    async deleteAll() {
        const count = await Order.destroy({
            where: {},
            truncate: true
        });
        return count;
    }
}

module.exports = new OrderService();
