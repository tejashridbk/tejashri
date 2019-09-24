module.exports = (sequelize, type) => {
    return sequelize.define( 'Subcategory', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: type.STRING,
            unique: true
        },
        name: {
            type: type.STRING,
        },
        common_name: {
            type: type.STRING
        },
        gstn: {
            type: type.STRING
        },
        categoryId: {
            type: type.INTEGER,
            foreignKey: true
        }
    })
}

