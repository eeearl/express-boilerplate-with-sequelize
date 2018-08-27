export default (sequelize, DataTypes) => {
    const Receipt = sequelize.define('receipts', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        receipt_date: DataTypes.DATE,
        reg_data: DataTypes.DATE,
        payment_type: DataTypes.CHAR,
        memo: DataTypes.STRING,
        delete_flag: DataTypes.BOOLEAN,
        user_id: DataTypes.INTEGER
    });

    return Receipt;
}