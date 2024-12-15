const express = require("express");
const app = express();
const dotenv = require("dotenv");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); 

dotenv.config()
const PORT = process.env.PORT

const mongoose =  require("mongoose");
//connect db
mongoose
     .connect(process.env.MONGO_URI)
     .then(()=>console.log("db connected"))
     .then((err)=>{
     err;
})

const dbSeeder = require('./dbSeeder');
const userRoute = require('./routes/User')
const productRoute = require('./routes/Product');
const orderRoute = require("./routes/Order");

app.use(express.json());
//database seeder routes
app.use('/api/seed',dbSeeder);

//routes
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/orders',orderRoute);

//Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(PORT||9000,()=>{
     console.log(`server listening on port ${PORT}`)
})