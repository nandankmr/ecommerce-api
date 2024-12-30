import express, { Router } from 'express';
import OrderController from '../../controllers/OrderController/';
import ValidatorMiddleware from '../../middlewares/ValidatorMiddleware';
import orderSchema from '../../schemas/orderSchema';

const validatorMiddleware = new ValidatorMiddleware();

const app: express.Application = express();
const router: Router = express.Router();

const orderController = new OrderController();

app.use('/', router);

router.get('/order', orderController.getOrders);

router.get('/products', orderController.getProducts);

router.get('/order/:id', orderController.getOrder);

router.post(
  '/order',
  validatorMiddleware.validate(orderSchema),
  orderController.createOrder
);

router.put(
  '/order/:id',
  validatorMiddleware.validate(orderSchema),
  orderController.updateOrder
);

router.delete('/order/:id', orderController.deleteOrder);

export default app;
