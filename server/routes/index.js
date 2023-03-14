const { Router } = require('express');
const router = Router();

const {
  getId,
  postTickets,
  buyTicket,
} = require('../controllers/concert.controller');
const {
  postProfile,
  getAllProfiles,
} = require('../controllers/profile.controller');

const { getAllUsers } = require('../controllers/user.controller');

router.post('/profile', postProfile);
router.get('/getAllProfiles', getAllProfiles);
router.post('/buyTicket', buyTicket);
router.get('/getIdTruthy', getId);
router.post('/postTickets', postTickets);
router.get('/getAllUsers', getAllUsers);

module.exports = router;
