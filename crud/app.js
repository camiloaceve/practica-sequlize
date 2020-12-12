const express = require('express');
const app = express();
const sequelize = require('./database/db');
const User = require('./database/models/User');

const port = 4000


app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get('/', (req, res) => {
  res.json("Hola Mundo");
})

app.use('/api/posts', require('./routes/post'));

app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`)

  sequelize.sync({ force: false }).then(() => {
    console.log('DB Connected');
    }).catch(error => {
        console.log('Error', error);
    })

})