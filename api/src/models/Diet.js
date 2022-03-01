const { DataTypes } = require('sequelize');
module.exports = sequelize => {
    sequelize.define('diet', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                const nameValue = this.getDataValue('name');
                return nameValue ? nameValue : null;
            }
        },
    }, { timestamps: false });
}
