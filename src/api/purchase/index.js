import express from 'express';
import * as controller from './purchase.controller';

const router = express.Router();

router.get('/', controller.fetch);
router.get('/:id', controller.fetchOne);
router.post('/:receipt_id', controller.create);
router.delete('/:id', controller.destroy);

export default router;