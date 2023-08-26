const express = require('express')

const {
  getTranslate,
  createTranslate,

} = require('../controllers/translateController')

const router = express.Router()

//get
router.get('/', getTranslate)

//post
router.post('/',createTranslate)


module.exports = router;
