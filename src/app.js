const express = require('express');
const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const auth = require('./middlewares/auth');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginController);
app.post('/user', userController.postUser);
app.get('/user', auth, userController.getUsers);
app.get('/user/:id', auth, userController.getUserById);
app.post('/categories', auth, categoryController.createCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
