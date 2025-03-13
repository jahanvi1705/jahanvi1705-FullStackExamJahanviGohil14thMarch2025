var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnect = require("./config/mongoConnection");

const userEntity = require('./model/userModel');
const orderEntity = require('./model/orderModel');
const cartEntity = require('./model/cartModel');
const orderItemEntity = require('./model/orderItemsModel');
const reportEntity = require('./model/reportModel');

const productSchema = require("./model/productSchema");


var indexRouter = require('./routes/index');
var authRouter = require('./module/user/userRoute');
var productRouter = require('./module/product/productRoute');
var orderRouter = require('./module/order/orderRoute');
var cartRouter = require('./module/cart/cartRoute');
var cors = require('cors')

const dotenv = require('dotenv');

dotenv.config();

var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/cart', cartRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.SERVER_PORT, ()=> {
  console.log("Server is listening on port", process.env.SERVER_PORT);
})

module.exports = app;
