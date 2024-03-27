// id_serial.js
var router = require('express').Router();
const id_serialDal = require('../../services/pg.id_serial.dal')

// api/id_serial
router.get('/m/:text', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/id/m/ GET ' + req.params.text);
    try {
        let theid_serial = await mDal.getid_serial(req.params.text); 
        if(theid_serial.length === 0) {
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
        } else
        res.json(theid_serial);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.get('/pg/:id_serial', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/id_serial/pg/ GET ' + req.params.text);
  try {
      let theid_serial = await pgDal.getid_serial(req.params.text); 
      if(theid_serial.length === 0) {
        res.statusCode = 404;
        res.json({message: "Not Found", status: 404});
      } else
        res.json(theid_serial);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;