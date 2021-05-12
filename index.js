const express = require('express');
const mongoose = require('mongoose');
const cookiesession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/key');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoUri , { useNewUrlParser: true ,useUnifiedTopology: true });




const authRoutes  = require('./routes/authesR');




const app = express();

app.use(
    cookiesession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookiekey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);


const PORT =process.env.PORT  || 5000;
app.listen(PORT);
