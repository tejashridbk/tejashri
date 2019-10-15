

module.exports = (sequelize, type) => {
    
    return sequelize.define( 'Enquiryproduct', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            defaultValue: type.INTEGER
            
        },
        EnquiryId: {
            type: type.INTEGER,
            primaryKey: false,
            references: {
              model: 'Enquiry',
              key: 'EnquiryId',
              },
              onDelete: 'cascade',
              onUpdate: 'cascade',
              //unique: 'unique-Enquiry-per-Product'
        
        },
        ProductId: {
            type: type.INTEGER,
            primaryKey: false,
            references: {
                model: 'Product',
                key: 'ProductId',
               
              },
              onDelete: 'cascade',
              onUpdate: 'cascade',
              //unique: 'unique-Product-per-Enquiry'
        }
        
    })
    
}

