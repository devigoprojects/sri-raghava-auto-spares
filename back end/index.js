const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const uploadFile = require('./middlewares/upload_image');
//dotenv configuration
dotenv.config();

const port = process.env.PORT || 3000

// instance for express
const app = express();

// routes
const brandsRoute = require('./routes/bike/brand');
const bikesRoute = require('./routes/bike/bikes');
const engineOilRoute = require('./routes/engine_oils');
const collectionRoute = require('./routes/collections');

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/brands',brandsRoute);
app.use('/bikes',bikesRoute)
app.use('/oils',engineOilRoute);
app.use('/collections',collectionRoute);


// uploadFile().then(data=>{
//     console.log(data)
// })
// mongodb connection
mongoose.connect(process.env.DATABASE_URL).then(
    ()=>{
        app.listen(port,()=>{
            console.log(`listening on port ${port}`)
         })
    }
).catch((err)=>{
    throw new Error(err);
})