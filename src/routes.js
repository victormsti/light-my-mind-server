const express = require('express');
const routes = express.Router();
const auth = require('./middleware/auth');

const ReminderController = require('./controllers/ReminderController');
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');

// Reminder Routes
routes.get('/reminders', auth, ReminderController.index);
routes.get('/reminders/users/id/:id', auth, ReminderController.getByUserId);
routes.get('/reminders/:id', auth, ReminderController.show);
routes.put('/reminders/:id', auth, ReminderController.update);
routes.post('/reminders', auth, ReminderController.store);
routes.delete('/reminders/:id', auth, ReminderController.destroy);

//Auth Routes
routes.post('/auth', AuthController.authenticate);
routes.post('/register', AuthController.signUp);

//User Routes
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;