const express = require('express');
const app = express();
const db = require('./db')


// pull API for these companies

// Stocks.findAll().then(results => {
//     results.forEach(data => {
//         console.log(data)
//     })
// }).catch((err) => {
//     console.error(err)
// })

// Sequelize.query('select * from stocks').then(results => {
//     results.forEach(data => {
//         console.log(data.company_symbol)
//     })
// }).catch((err) => {
//     console.error(err)
// })