module.exports = (sequelize, type) => {
    return sequelize.define( 'CreatePO', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        loadingcharges: {
            type: type.INTEGER,
            //primaryKey: true,
            //autoIncrement: true
        },
        transportation: {
            type: type.INTEGER,
            unique: true
        },
        taxablevalue: {
            type: type.INTEGER
        },
        gst: {
            type: type.INTEGER
        },
        totalestimation: {
            type: type.INTEGER
        }
    })
}

