const {Order} = require('../models/models');

class OrderService {
    async create(order) {
        const createdOrder = await Order.create(order);
        return createdOrder;
    }

    async isExist(name) {
        const order = await Order.findOne({where: {name}});
        return order;
    }

    async isExistId(id) {
        const product = await Order.findOne({ where: { 'anum': id } });
        return product;
    }


    async getAll(query) {
        const {limit} = query;

        const orders = await Order.findAll(limit ? {limit: +limit, order: [['id', 'DESC']]} : {});
        return orders;
    }

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

    async updateOne(order, id) {

        const existOrder = await this.isExistId(id);
        if (!existOrder) {
            throw new Error('order is not exist');
        }

        const data = {
            date: order.date,
            time: order.time,
            man: order.man,
            CustName: order.CustName,
            CustFirm: order.CustFirm,
            CustAddr: order.CustAddr,
            CustPhone: order.CustPhone,
            CustMail: order.CustMail,
            Course: order.Course,
            PrExESum: order.PrExESum,
            PrGrnSum: order.PrGrnSum,
            Zapr: order.Zapr,
            KP: order.KP,
            Inv: order.Inv,
            Mon: order.Mon,
            Sum: order.Sum,
            _Add: order._Add,
            AddS: order.AddS,
            Color: order.Color,
            shipping_rate: order.shipping_rate,
        };

        const count = await Order.update(data, { where: { 'anum': id } });
        return count;
    }
}

module.exports = new OrderService();
