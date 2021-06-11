const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
const Event = require('../models/event.js');
const Test = require('../models/test.js');


const jwtSecret = process.env.JWT_SECRET_TOKEN;
const router = express.Router();

router.post('/test', (req,res) => {
  console.log('Hey');
  const newTest = Test({
    title: req.body.title,
  });
  newTest.save().then(()=> {
    console.log("Hb");
    res.status(201);
  }).catch((errorInStoring) => {
    res.status(400).send(`unable to save to database ${errorInStoring}`);
  });
})
// [ADMIN] :  Create a new event
router.post('/create', (req, res) => {
    const newEvent = Event({
      title: req.body.title,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      withDrawTime: req.body.withDrawTime,
      location: req.body.location,
      description: req.body.description,
      organiser: req.body.organiser,
      noOfVolunteers: req.body.noOfVolunteers,
    });
    newEvent
        .save()
        .then(() => {
            res.status(201).send('Event Saved');
        })
        .catch((errorInStoring) => {
            res.status(400).send(`unable to save to database ${errorInStoring}`);
          });
});

router.get('/getAllEvents', async (req, res) => {
  let results;
  try {
     results = await Event.find();
   } catch (e) {
     res.send({ message: "Error in Fetching events" });
   }
   res.json({rendezvous: results.map(result => result.toObject({getters: true}) )});
 });


// [ADMIN] :  Create a new event
router.post('/delete', (req, res) => {
  const newEvent = Event({
    title: req.body.title,
    date: req.body.date,
    startTime: req.body.employeeID,
    endTime: req.body.endTime,
    withDrawTime: req.body.withDrawTime,
    location: req.body.location,
    description: req.body.description,
    organiser: req.body.organiser,
    noOfVolunteers: req.body.noOfVolunteers,
  });
  newEvent
      .save()
      .then(() => {
          res.status(201);
      })
      .catch((errorInStoring) => {
          res.status(400).send(`unable to save to database ${errorInStoring}`);
        });
});

router.post('/register', (req, res) => {
    const newUser = User({
      name: req.body.name,
      organization: req.body.organization,
      employeeID: req.body.employeeID,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      registrationId: regId(),
      createdAt: Date.now(),
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        // Encrypting the password
        newUser.password = hash;
        newUser
          .save()
          .then(() => {
            const jwtpayload = {
              id: newUser.id,
              name: newUser.name,
              registrationId: newUser.registrationId,
            };
            const token = jwt.sign(jwtpayload, jwtSecret);
            const { registrationId } = newUser;
            const response = {
              token,
              registrationId,
            };
            res.status(201).send(response);
          })
          .catch((errorInStoring) => {
            res.status(400).send(`unable to save to database ${errorInStoring}`);
          });
      });
    });
  });


  router.post('/withdraw', (req, res) => {
    const newUser = User({
      name: req.body.name,
      organization: req.body.organization,
      employeeID: req.body.employeeID,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      password: req.body.password,
      registrationId: regId(),
      createdAt: Date.now(),
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (error, hash) => {
        // Encrypting the password
        newUser.password = hash;
        newUser
          .save()
          .then(() => {
            const jwtpayload = {
              id: newUser.id,
              name: newUser.name,
              registrationId: newUser.registrationId,
            };
            const token = jwt.sign(jwtpayload, jwtSecret);
            const { registrationId } = newUser;
            const response = {
              token,
              registrationId,
            };
            res.status(201).send(response);
          })
          .catch((errorInStoring) => {
            res.status(400).send(`unable to save to database ${errorInStoring}`);
          });
      });
    });
  });




module.exports = router;


