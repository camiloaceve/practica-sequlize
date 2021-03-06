const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');
require('./database/asociations');

const port = 4002


app.use(express.json());
app.use(express.urlencoded({ extended: false}));



app.get('/', (req, res) => {
  res.json("Hola Mundo");
})

app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));
app.use('/api/address', require('./routes/address'));



app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)

  sequelize.sync({ force: true }).then(() => {
    console.log('DB Connected');
    }).catch(error => {
        console.log('Error', error);
    })

})