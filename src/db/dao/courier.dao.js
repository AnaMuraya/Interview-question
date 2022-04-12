// import sequelize
const {Models} = require("sequelize")

class CourierDao {
    findById(courierId) {
        return Models.findOne({
            where: { id: courierId },
            // ...
        });
    }
}

const CourierDaoSingleton = new CourierDao();
