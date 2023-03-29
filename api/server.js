const express = require('express');
const mongodb = require('mongodb').MongoClient;
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

