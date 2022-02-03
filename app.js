const express = require('express');
const path = require('path');
const { environment } = require('./config');

const session = require('express-session');
const { sessionSecret } = require('./config');

const { csrf, csrfProtection, cookieParser } = require('./utils');
const { restoreUser } = require('./auth');

const indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const usersRouter = require('./routes/users');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));
app.use(csrf({ cookie: true }));

app.use(session({
  name: 'respawn.sid',
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
}));

app.use(restoreUser);
app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/users', usersRouter);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
