const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoUri , { useNewUrlParser: true ,useUnifiedTopology: true });




const authRoutes  = require('./routes/authesR');




const app = express();

authRoutes(app);


const PORT =process.env.PORT  || 5000;
app.listen(PORT);
