const dotenv = require("dotenv");
const express = require('express');
const {connectDB} = require("./config/connection");

const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

dotenv.config()

app.use(express.json())

const cors = require('cors');
app.use(cors());

app.use('/api/blogs', blogRoutes);
app.use(userRoutes);

app.get("/", (req, res) => {
    res.send("Backend server is running, fikr not")
})

connectDB()

app.listen(process.env.PORT || 5000, console.log(`Server running on ${process.env.PORT}`));