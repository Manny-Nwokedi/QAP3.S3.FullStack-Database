// name.js
var router = require('express').Router();
const nameDal = require('../../services/pg.name.dal')

// api/name
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/name/ GET ' + req.url);
    try {
        let thename = await namesDal.getname(); 
        res.json(thename);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/name/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/name/:id GET ' + req.url);
    try {
        let anname = await nameDal.getnameBynameId(req.params.id); 
        if (anname.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anname);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) { 
        console.log('ROUTE: /api/name/ POST');
        // console.log(req);
    }
    try {
        await nameDal.addname(req.body.firstName, req.body.lastName );
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    } 
});
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/name PUT ' + req.params.id);
    try {
        await nameDal.putname(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/name PATCH ' + req.params.id);
    try {
        await nameDal.patchname(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/name DELETE ' + req.params.id);
    try {
        await nameDal.deletename(req.params.id);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// // list the active api routes
// if(DEBUG) {
//     router.stack.forEach(function(r){
//         if (r.route && r.route.path){
//         console.log(r.route.path)
//         }
//     });
// }
module.exports = router;