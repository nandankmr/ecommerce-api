import express, { Router } from 'express';
import OrderRouter from './OrderRouter';

const router: Router = express.Router();

router.use([OrderRouter]);

export default router;
