const User = require('./user');
const Item = require('./item');
const Category = require('./category');

Category.hasMany(Item, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(Category, {
  foreignKey: 'category_id'
});


User.hasMany(Item, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Item.belongsTo(User, {
    foreignKey: 'user_id'
  });
  

module.exports = { User, Category, Item};
