// created_at.js
var router = require('express').Router();
const created_atDal = require('../../services/pg.created_at.dal')

// api/created_at
router.get('/m/:created_at', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/created_at/m/ GET ' + req.params.text);
    try {
        let thecreated_at = await mDal.getcreated_at(req.params.text); 
        if(thecreated_at.length === 0) {
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
        } else
        res.json(thecreated_at);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.get('/pg/:created_at', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/created_at/pg/ GET ' + req.params.created_at);
  try {
      let thecreated_at = await pgDal.getcreated_at(req.params.created_at); 
      if(thecreated_at.length === 0) {
        res.statusCode = 404;
        res.json({message: "Not Found", status: 404});
      } else
        res.json(thecreated_at);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;