var router = require('express').Router();
// const actorsDal = require('../../services/pg.actors.dal')
const glassdoorDal = require('../services/dal/glassdoor.dal');

router.get('/', async (req, res) => {
    if (DEBUG) console.log('ROUTE: /api/glassdoor/ GET ' + req.url);
    try {
        let theGlassdoor = await glassdoorDal.getGlassdoor();
        res.json(theGlassdoor);
        console.log(theGlassdoor);
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

router.get('/:id', async (req, res) => {
    if (DEBUG) console.log('ROUTE: /api/glassdoor/:id GET ' + req.url);
    try {
        let anGlassdoor = await glassdoorDal.getGlassdoorByGlassdoor(req.params.id);
        if (!anGlassdoor) {
            res.statusCode = 404;
            res.json({ message: "Not Found", status: 404 });
        } else {
            res.json(anGlassdoor);
        }
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

router.post('/', async (req, res) => {
    if (DEBUG) {
        console.log('ROUTE: /api/glassdoor/ POST');
        // console.log(req);
    }
    try {
        await glassdoorDal.addGlassdoor(req.body.realName, req.body.stageName);
        res.statusCode = 201;
        res.json({ message: "Created", status: 201 });
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

router.put('/:id', async (req, res) => {
    if (DEBUG) console.log('ROUTE: /api/glassdoor PUT ' + req.params.id);
    try {
        await glassdoorDal.putGlassdoor(req.params.id, req.body.realName, req.body.stageName);
        res.statusCode = 200;
        res.json({ message: "OK", status: 200 });
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

router.patch('/:id', async (req, res) => {
    if (DEBUG) console.log('ROUTE: /api/glassdoor/glassdoor PATCH ' + req.params.id);
    try {
        await glassdoorDal.patchAGlassdoor(req.params.id, req.body.realName, req.body.stageName);
        res.statusCode = 200;
        res.json({ message: "OK", status: 200 });
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

router.delete('/:id', async (req, res) => {
    if (DEBUG) console.log('ROUTE: /api/glassdoor DELETE ' + req.params.id);
    try {
        await glassdoorDal.deleteGlassdoor(req.params.id);
        res.statusCode = 200;
        res.json({ message: "OK", status: 200 });
    } catch (error) {
        console.error(error);
        res.statusCode = 503;
        res.json({ message: "Service Unavailable", status: 503 });
    }
});

// Export the router
module.exports = router;
