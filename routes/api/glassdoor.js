
var router = require('express').Router();
// const glassdoorDal = require('../../services/pg.glassdoor.dal')
const glassdoorDal = require('../../services/m.glassdoor.dal')

// api/glassdoor
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/glassdoor/ GET ' + req.url);
    try {
        let theGlassdoor = await glassdoorDal.getGlassdoor(); 
        res.json(theGlassdoor);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
// api/actors/:id
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/glassdoor/:id GET ' + req.url);
    try {
        let anGlassdoor = await actorsDal.getGlassdoorByGlassdoorId(req.params.id); 
        if (anGlassdoor.length === 0) {
            // log this error to an error log file.
            res.statusCode = 404;
            res.json({message: "Not Found", status: 404});
        }
        else
            res.json(anGlassdoor);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.post('/', async (req, res) => {
    if(DEBUG) { 
        console.log('ROUTE: /api/glassdoor/ POST');
        // console.log(req);
    }
    try {
        await glassdoorDal.addGlassdoor(req.body.glassdoorName, req.body.screenName );
        res.statusCode = 201;
        res.json({message: "Created", status: 201});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    } 
});
router.put('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/actors PUT ' + req.params.id);
    try {
        await actorsDal.(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.patch('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/actors PATCH ' + req.params.id);
    try {
        await actorsDal.patchActor(req.params.id, req.body.firstName, req.body.lastName);
        res.statusCode = 200;
        res.json({message: "OK", status: 200});
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});
router.delete('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/actors DELETE ' + req.params.id);
    try {
        await actorsDal.deleteActor(req.params.id);
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
