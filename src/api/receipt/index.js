import express from 'express';
import * as controller from './receipt.controller';

const router = express.Router();

router.get('/', controller.fetch);
router.post('/', controller.create);

export default router;