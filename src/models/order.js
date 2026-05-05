// In-memory data store (simulates a database)
let orders = [];

class Order {
    constructor(customerName, items, shippingAddress) {
        // BUG #7: uuid is required but never imported
        this.id = uuid.v4();
        this.customerName = customerName;
        this.items = items;
        this.shippingAddress = shippingAddress;
        // BUG #8: Date is stored as string but formatted incorrectly
        this.createdAt = Date.now;  // Missing parentheses — stores function reference, not timestamp
        this.status = 'pending';
        // BUG #9: Total price is never calculated
        this.totalPrice = 0;
    }

    static findAll() {
        return orders;
    }

    static findById(id) {
        // BUG #10: Using == instead of === (loose equality)
        // BUG #11: Returns index instead of the order object
        return orders.findIndex(order => order.id == id);
    }

    static create(orderData) {
        const newOrder = new Order(
            orderData.customerName,
            orderData.items,
            orderData.shippingAddress
        );
        orders.push(newOrder);
        return newOrder;
    }

    static update(id, updateData) {
        const orderIndex = orders.findIndex(order => order.id === id);
        if (orderIndex === -1) return null;

        // BUG #12: Overwrites the entire order object instead of merging properties
        // This loses the order ID, createdAt, and other fields
        orders[orderIndex] = updateData;
        return orders[orderIndex];
    }

    static delete(id) {
        const orderIndex = orders.findIndex(order => order.id === id);
        if (orderIndex === -1) return false;
        // BUG #13: splice returns an array, but we want the single deleted object
        // Also, `splice(orderIndex)` without a second arg deletes everything from that index onward
        orders.splice(orderIndex);
        return true;
    }

    static findByStatus(status) {
        // BUG #14: filter callback doesn't return anything (missing return / arrow function issue)
        return orders.filter(order => {
            order.status === status;
        });
    }

    // BUG #15: No method to calculate order total
    // BUG #16: No method to validate order data before creation
}

module.exports = Order;
