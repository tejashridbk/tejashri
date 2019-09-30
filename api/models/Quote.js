module.exports = (sequelize, type) => {
    return sequelize.define( 'Quote', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        
        loadingcharges: {
            type: type.INTEGER,
            
        },
        transportation: {
            type: type.INTEGER,
            //unique: true
        },
        taxablevalue: {
            type: type.INTEGER
        },
        gst: {
            type: type.INTEGER
        },
        totalestimation: {
            type: type.INTEGER
        },
        rateperkg: {
            type: type.INTEGER,
            
        },
        value: {
            type: type.INTEGER,
            
        },
    })
}

