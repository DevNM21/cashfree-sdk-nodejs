const {
    ORDER_REFUND_REL_URL,
    REFUNDS_REL_URL,
    REFUND_STATUS_REL_URL,
} = require('../constants');

function Refunds() {
    return {
        initiateRefund: async (data = {}) => {
            try {
                // make request
                const res = await this.doPost({
                    url: ORDER_REFUND_REL_URL,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data,
                });
                return res;
            } catch (e) {
                return {
                    status: 'ERROR',
                    reason: e && e.message || 'Something went wrong',
                };
            }
        },
        fetchAllRefunds: async (data = {}) => {
            try {
                // make request
                const res = await this.doPost({
                    url: REFUNDS_REL_URL,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data,
                });
                return res;
            } catch (e) {
                return {
                    status: 'ERROR',
                    reason: e && e.message || 'Something went wrong',
                };
            }
        },
        fetchSingleRefund: async (data = {}) => {
            try {
                // make request
                const res = await this.doPost({
                    url: REFUND_STATUS_REL_URL,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data,
                });
                return res;
            } catch (e) {
                return {
                    status: 'ERROR',
                    reason: e && e.message || 'Something went wrong',
                };
            }
        }
    };
}

module.exports = Refunds;