// import sequelize
const { Models } = require("sequelize");

class OrderDao {
    findById(orderId) {
        return Models.findOne({
            where: { id: orderId },
            // ...
        });
    }
}

const OrderDaoSingleton = new OrderDao();
