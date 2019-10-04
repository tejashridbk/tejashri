module.exports = (sequelize, type) => {
    return sequelize.define( 'Category', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        code: {
            type: type.INTEGER,
            //unique: true
        },
        name: {
            type: type.STRING,
        },
        common_name: {
            type: type.STRING
        },
        gstn: {
            type: type.STRING
        }
    })
}