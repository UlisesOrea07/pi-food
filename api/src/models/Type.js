const { DataTypes } = require('sequelize');
module.exports = sequelize => {
    sequelize.define('type', {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}
