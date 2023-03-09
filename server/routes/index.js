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

router.post('/profile', postProfile);
router.get('/getAllProfiles', getAllProfiles);
router.post('/buyTicket', buyTicket);
router.get('/getIdTruthy', getId);
router.post('/postTickets', postTickets);

module.exports = router;
