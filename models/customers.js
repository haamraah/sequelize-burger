module.exports = function (sequelize, DataTypes) {
    var Customers = sequelize.define("Customers", {
        customer_name: DataTypes.STRING
    });
    return Customers;
};