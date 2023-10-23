const express = require('express');
const cors = require('cors');
const connectDB = require("./config");
const { PORT } = require('./env_exports');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Define the API endpoints
app.get('/', async (req, res) => res.status(200).json({ message: 'Server is running fine!' }));
app.use('/api/tasks', require('./routes/taskRoutes'));


//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
})