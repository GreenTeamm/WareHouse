const { type } = require("node:os");
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Product. init ({
    id: {
    type: DataType.INTEGER,
    allownull: true,
    primaryKey: true,
    autoIncrement: true,
    },
    name :{
        type: DataType.STRING,
        allownull:false
    },
    colour: {
        type: DataType.STRING,
        allownull:false 
    },
    material: {
        type: DataType.STRING, 
        allownull: false
    },
    stock : {
        type: DataType.INTEGER,
        allownull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true,
        },
    },
   type : {
       type: DataType.STRING,

   },
   UserId :{
   type: DataType.INTEGER,
   allownull: true,
    references: { model: 'user', key: 'id'}
    },

    price: {
        type: DataType.DECIMAL,
        allownull:false
    }

}, 

{    
    sequelize,
        modelName: 'product',
        timestamps: false,
        freezeTableName: true,
        underscored: true,     
    })

    model.exports = Product;