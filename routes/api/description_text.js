// description_text.js
var router = require('express').Router();
const description_textDal = require('../../services/pg.description_text.dal')

// api/description_text
router.get('/m/:description_text', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/description_text/m/ GET ' + req.params.description_text);
    try {
        let thedescription_text = await mDal.getdescription_text(req.params.description_text); 
        if(thedescription_text.length === 0) {
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
        } else
        res.json(thedescription_text);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

router.get('/pg/:description_text', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/description_text/pg/ GET ' + req.params.description_text);
  try {
      let thedescription_text = await pgDal.getdescription_text(req.params.description_text); 
      if(thedescription_text.length === 0) {
        res.statusCode = 404;
        res.json({message: "Not Found", status: 404});
      } else
        res.json(thedescription_text);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;