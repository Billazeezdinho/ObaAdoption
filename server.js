const express = require('express');
const sequelize = require('./database/sequelize');
const adoptionRouter = require ('./routes/adoptionRouter.js');
const petRouter = require('./routes/petRouter.js');
const adminRouter = require('./routes/adminRouter.js');

const cors = require('cors');
const PORT = 5550;

const app = express();
app.use(cors({origin: "*"}))

app.use(express.json());

// use the express body-parser middleware
app.use(adminRouter)
app.use(adoptionRouter);
app.use(petRouter);
  
const server = async (params)=> {
    try {
        
        
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch (error){
        console.error('unable to connect to the database:', error);
    }
}
server();

app.listen(PORT, ()=>{
    console.log(`This server is listening to PORT: ${PORT}`);
    
})
