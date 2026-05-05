const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

// BUG #32: GET and POST are swapped — GET should retrieve, POST should create
router.post('/', orderController.getAllOrders);
router.get('/', orderController.createOrder);

// BUG #33: Route parameter uses `:orderId` but controller reads `req.params.id`
router.get('/:orderId', orderController.getOrderById);
router.put('/:orderId', auth.verifyToken, orderController.updateOrder);
router.delete('/:orderId', auth.verifyToken, orderController.deleteOrder);

// BUG #34: This route conflicts with `/:orderId` — Express will match "status" as an orderId
router.get('/status', orderController.getOrdersByStatus);

// BUG #35: Summary route is defined but uses wrong controller method name
router.get('/summary', orderController.orderSummary);

module.exports = router;
