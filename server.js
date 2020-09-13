const express = require('express');
const cors = require('cors');
const boduParser = require('body-parser');
const path = require('path');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

const port = process.env.PORT || 5000;

app.use(boduParser.json());
app.use(boduParser.urlencoded({ extended: true }));

app.use(cors());

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res)=> {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    });
}

app.listen(port, error => {
    if(error) throw error;
    console.log(`Server listen at port ${port}`)
});

app.post('/api/payment', (req, res)=>{
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
        description: 'Software development services',
        shipping: {
            name: req.body.token.card.name,
            address: {
              line1: req.body.token.card.address_line1,
              postal_code: req.body.token.card.address_zip,
              city: req.body.token.card.address_city,
              state: req.body.token.card.address_state,
              country: req.body.token.card.address_country,
            },
          }
    };

    stripe.charges.create(body, (striprErr, stripeData)=>{
        if(striprErr){
            res.status(500).send({ error: striprErr });
        }else{
            res.status(200).send({ success: stripeData });
        }
    });
});