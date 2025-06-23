require('dotenv').config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const authRoutes = require('./routes/user'); 
const prestRoutes = require('./routes/Prest');

const app=express();
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the actual URL of your React frontend if different
  methods: ['GET', 'POST'], // Allow only GET and POST methods
  allowedHeaders: ['Content-Type'], // Allow Content-Type header
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use('/authClient',authRoutes); //to test : http localhost 4000/authClient
app.use('/authPrest',prestRoutes);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("Connected to database!");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed:", error);
  });
