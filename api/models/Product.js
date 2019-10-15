module.exports = (sequelize, type) => {
    return sequelize.define( 'Product', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: type.INTEGER
        },
        code: {
            type: type.STRING,
            unique: true
        },
        name: {
            type: type.STRING
        },
        
        gstn: {
            type: type.STRING
        },
        flange1: {
           
            type: type.DOUBLE
        },
        flange2: {
            
            type: type.DOUBLE
        },
        flange3: {
            
            type: type.DOUBLE
        },
        weight_per_meter: {
           
            type: type.DOUBLE
        },
        thickness: {
           
            type: type.DOUBLE
        },
        width: {
           
            type: type.DOUBLE
        },
        length: {
           
            type: type.DOUBLE
        },
        description: {
           
            type: type.STRING
        },
        common_name: {
           
            type: type.STRING
        },
        grade_specs: {
           
            type: type.STRING
        },
        brandname: {
           
            type: type.STRING
        },
        outer_diameter: {
           
            type: type.DOUBLE
        },
        total: {
            type: type.INTEGER
        }
        
        
    })
    
   

}



