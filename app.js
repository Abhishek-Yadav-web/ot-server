const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload')


const corsOptions = {
    origin : ["http://localhost:3000"],
    optionsSuccessStatus: 200
}

// config & use
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions))
app.use(fileUpload())



dotenv.config({path : "./config/config.env"});


// routers import & use
const homeRouter = require('./router/home');
const productRouter = require('./router/product');
const userRouter = require('./router/user');
const orderRouter = require('./router/order');
const wishlistRouter = require('./router/wishlist');
const paymentRouter = require('./router/payment');

app.use(homeRouter);
app.use(productRouter);
app.use('/api/v1',userRouter);
app.use('/api/v1',orderRouter);
app.use('/api/v1',wishlistRouter);
app.use('/api/v1',paymentRouter);

app.get('/api/v1/test', (req,res) => {
    res.json({
        messgae : "test is working"
    })
})

// export app
module.exports = app