
module.exports = (sequelize, type) => {
    return sequelize.define( 'Enquiry', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //defaultValue: type.INTEGER
        },
        address: {
            type: type.STRING
            
        },
        phone: {
            type: type.INTEGER
            
        },
        emailid: {
            type: type.STRING
        },
        partyname: {
            type: type.STRING
        },
        partyaddress: {
            type: type.STRING
        },
        quantity: {
            type: type.INTEGER
        },
        date: {
            type: type.DATE
        },
        size: {
            type: type.INTEGER
        },
        quantity_no: {      
               type: type.INTEGER
        },
        quantity_kg: {
            type: type.INTEGER

        },
        total: {
            type: type.INTEGER

        }
        
    })
   
}




