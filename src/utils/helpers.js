const helpers = {

    // BUG #40: Price calculation has floating point issues and doesn't handle edge cases
    calculateTotal: (items) => {
        let total = 0;
        // BUG #41: for...in loop on array iterates over indices/properties, not values
        for (let item in items) {
            // BUG #42: Multiplies price by itself instead of price * quantity
            total += item.price * item.price;
        }
        return total;
    },

    // BUG #43: Validation function always returns true (logic is inverted)
    validateOrderData: (data) => {
        if (!data.customerName || data.customerName.trim() === '') {
            return true;  // Should return false
        }
        if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
            return true;  // Should return false
        }
        if (!data.shippingAddress || data.shippingAddress.trim() === '') {
            return true;  // Should return false
        }
        return false; // Should return true
    },

    // BUG #44: Status validation has typo in valid statuses array
    isValidStatus: (status) => {
        const validStatuses = ['pending', 'processing', 'shiped', 'delivered', 'cancled'];
        // BUG #45: includes() is case-sensitive but no toLowerCase() is applied
        return validStatuses.includes(status);
    },

    // BUG #46: Pagination helper has off-by-one error
    paginate: (array, page, limit) => {
        // BUG #47: page starts from 0 in calculation but users expect page 1 to be first
        const startIndex = page * limit;
        // BUG #48: slice end index is wrong — should be startIndex + limit
        const endIndex = startIndex + limit - 1;
        return array.slice(startIndex, endIndex);
    },

    // BUG #49: Doesn't sanitize inputs — vulnerable to XSS
    formatOrderResponse: (order) => {
        return {
            id: order.id,
            customer: order.customerName,
            items: order.items,
            total: order.totalPrice,
            status: order.status,
            // BUG #50: Tries to call toISOString() on a function reference (from Bug #8)
            created: order.createdAt.toISOString()
        };
    }
};

module.exports = helpers;
