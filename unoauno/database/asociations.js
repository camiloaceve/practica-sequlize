const Post = require('./models/Post');
const User = require('./models/User');
const Address = require('./models/Address');

// uno a Uno

// Usuario tiene una direccion
// añadir una clave foranea userId a la tabla addresses
User.hasOne(Address, { as: "domicilio", foreignKey: "residente_id" });

// Añade una clave userId a la tabla addresses
Address.belongsTo(User, { as: "residente", foreignKey: "residente_id" });