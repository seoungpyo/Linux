module.exports = function(sequelize, DataTypes) {
    return sequelize.define('users',{
        name: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        birthdate: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING(250),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
     });
};
  