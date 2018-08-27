export default (sequelize, DataTypes) => {
    const Purchase = sequelize.define('purchases', {
        id: {
            type: DataTypes.INTEGER, 
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        receipt_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        item_name: {
            type: DataTypes.CHAR,
            allowNull: false
        },
        price: {
            type: DataTypes.REAL,
            allowNull: false
        },
        delete_flag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        reg_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    });    

    return Purchase;
}