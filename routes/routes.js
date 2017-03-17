const router = require('express').Router()

router.get('/', function(req, res, next){
  res.send('You made it!')
})

module.exports = router;
