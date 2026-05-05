const Order = require('../models/order');

const orderController = {

    // GET all orders
    getAllOrders: (req, res) => {
        try {
            const orders = Order.findAll();
            // BUG #17: Always returns 200 even if orders array is empty — should differentiate
            res.status(200).json(orders);
        } catch (error) {
            // BUG #18: Sends error object directly — may expose sensitive stack trace info
            res.status(500).json({ error: error });
        }
    },

    // GET order by ID
    getOrderById: (req, res) => {
        try {
            const order = Order.findById(req.params.id);
            // BUG #19: findById returns an index (number), not an order object
            // Checking `if (!order)` won't catch index 0 (falsy) — will return "not found" for first order
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // POST create new order
    createOrder: (req, res) => {
        try {
            // BUG #20: No input validation at all — customerName, items, address could be undefined/empty
            const { customerName, items, shippingAddress } = req.body;

            // BUG #21: req.body will be undefined because bodyParser.json() was never added
            const newOrder = Order.create({
                customerName,
                items,
                shippingAddress
            });

            // BUG #22: Returns 200 instead of 201 for resource creation
            res.status(200).json({
                message: 'Order created successfully',
                order: newOrder
            });
        } catch (error) {
            // BUG #23: Returns 400 for what could be a server error
            res.status(400).json({ error: error.message });
        }
    },

    // PUT update order
    updateOrder: (req, res) => {
        try {
            const { id } = req.params;
            const updateData = req.body;

            // BUG #24: No check for empty update body
            const updatedOrder = Order.update(id, updateData);

            if (!updatedOrder) {
                return res.status(404).json({ message: 'Order not found' });
            }

            // BUG #25: Returns the broken updated order (which lost all its original fields)
            res.status(200).json({
                message: 'Order updated successfully',
                order: updatedOrder
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // DELETE order
    deleteOrder: (req, res) => {
        try {
            const { id } = req.params;
            const deleted = Order.delete(id);

            if (!deleted) {
                return res.status(404).json({ message: 'Order not found' });
            }

            // BUG #26: Returns 200 instead of 204 (No Content) for successful delete
            // Also sends a body with 204 which some clients ignore
            res.status(200).json({ message: 'Order deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET orders by status
    getOrdersByStatus: (req, res) => {
        try {
            // BUG #27: reads `req.params.status` but the route uses query params `req.query.status`
            const { status } = req.params;

            // BUG #28: No validation for allowed status values
            const orders = Order.findByStatus(status);

            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // GET order summary/analytics
    getOrderSummary: (req, res) => {
        try {
            const orders = Order.findAll();

            // BUG #29: reduce has no initial value — crashes on empty array
            const totalRevenue = orders.reduce((sum, order) => sum + order.totalPrice);

            // BUG #30: `length` is called as a method instead of a property
            const summary = {
                totalOrders: orders.length(),
                totalRevenue: totalRevenue,
                // BUG #31: `pending` is not in quotes — ReferenceError
                pendingOrders: orders.filter(o => o.status === pending).length,
                completedOrders: orders.filter(o => o.status === 'completed').length
            };

            res.status(200).json(summary);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = orderController;
