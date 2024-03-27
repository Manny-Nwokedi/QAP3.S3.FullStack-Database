const express = require('express');
const app = express();

// Use the router middleware

// Start the server
const PORT = process.env.PORT || 3000;
app.use(express.json());
global.DEBUG = true;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const glassdorRouter = require('./routes/glassdoor')
app.use('/api/glassdoor', glassdorRouter);



// const config = require('./config');

// if (config.DEBUG) {
    // console.log('Debugging is enabled');
    // console.log('ROUTE: /api/id_serial');
    // console.log('ROUTE: /api/name');
    // console.log('ROUTE: /api/description_text');
    // console.log('ROUTE: /api/price');
    // console.log('ROUTE: /api/created_at');
// }

// http://localhost:3000/api/id_serial/
// const id_serialRouter = require('./id_serial');
// router.use('/id_serial', id_serialRouter);
// 
// http://localhost:3000/api/name/
// const nameRouter = require('./name');
// router.use('/name', nameRouter);
// 
// http://localhost:3000/api/description_text/
// const description_textRouter = require('./description_text');
// router.use('/description_text', description_textRouter);
// 
// http://localhost:3000/api/price/
// const priceRouter = require('./price');
// router.use('/price', priceRouter);
// 
// http://localhost:3000/api/created_at/
// const created_atRouter = require('./created_at');
// router.use('/created_at', created_atRouter);

