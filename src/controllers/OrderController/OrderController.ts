import { Request, Response } from "express";
import { Order } from "./types";
import * as db from "../../models";
import BadRequestError from "../../errors/BadRequestError";

export default class OrderController {
    async getOrders(req: Request, res: Response) {
        const orders = await db.orders.findAll();
        res.json(orders);
    }

    async getOrder(req: Request, res: Response) {
        const order = await db.orders.findOne({
            include: [{
                model: db.order_product_map,
                as: 'products',
                include: [{
                    model: db.products,
                    as: 'product',
                }],
            }],
            where: {
                id: req.params.id,
            },
        });
        if (!order) {
            throw new BadRequestError('Order not found');
        }
        res.json(order);
    }

    async createOrder(req: Request, res: Response) {
        const { orderDescription, products }: Order = req.body;
        const order = await db.orders.create({
            orderDescription,
            createdAt: new Date(),
        });

        await db.order_product_map.bulkCreate(
            products.map((productId) => ({
                orderId: order.id,
                productId,
            }))
        );
        res.json({
            status: true,
        });
    }

    async updateOrder(req: Request, res: Response) {
        const { orderDescription, products }: Order = req.body;
        const id = req.params.id;
        const order = await db.orders.findByPk(id);
        if (!order) {
            throw new BadRequestError('Order not found');
        }
        await order.update({
            orderDescription,
            createdAt: new Date(),
        });
        await db.order_product_map.destroy({
            where: {
                orderId: id,
            },
        });
        await db.order_product_map.bulkCreate(
            products.map((productId) => ({
                orderId: order.id,
                productId,
            }))
        );
        res.json({
            status: true,
        });
    }

    async deleteOrder(req: Request, res: Response) {
        const id = req.params.id;
        const order = await db.orders.findByPk(id);
        if (!order) {
            throw new BadRequestError('Order not found');
        }
        await db.order_product_map.destroy({
            where: {
                orderId: id,
            },
        });
        await order.destroy();
        res.json({
            status: true,
        });
    }
}