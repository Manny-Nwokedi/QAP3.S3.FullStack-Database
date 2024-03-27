// price.js
var router = require('express').Router();
const priceDal = require('../../services/pg.price.dal')

// api/price
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/price/ GET ' + req.url);
    try {
        let theprice = await priceDal.getprice(); 
        res.json(theprice);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/price/:id
router.get('/:id', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/price/:id GET ' + req.url);
  try {
      let aprice = await priceDal.getpriceBypriceId(req.params.id); 
      if (aLogin.length === 0) {
          // log this error to an error log file.
          res.statusCode = 404;
          res.json({message: "Not Found", status: 404});
      }
      else
          res.json(aprice);
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});
router.post('/', async (req, res) => {
  if(DEBUG) { 
      console.log('ROUTE: /api/price/ POST');
  //    console.log(req);
  }
  try {
      await priceDal.addprice(req.body.username, req.body.password );
      res.statusCode = 201;
      res.json({message: "Created", status: 201});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  } 
});
router.patch('/:id', async (req, res) => {
  if(DEBUG) console.price('ROUTE: /api/price PATCH ' + req.params.id);
  try {
      await priceDal.patchprice(req.params.id, req.body.username, req.body.password);
      res.statusCode = 200;
      res.json({message: "OK", status: 200});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});
router.delete('/:id', async (req, res) => {
  if(DEBUG) console.log('ROUTE: /api/price DELETE ' + req.params.id);
  try {
      await priceDal.deleteprice(req.params.id);
      res.statusCode = 200;
      res.json({message: "OK", status: 200});
  } catch {
      // log this error to an error log file.
      res.statusCode = 503;
      res.json({message: "Service Unavailable", status: 503});
  }
});

module.exports = router;