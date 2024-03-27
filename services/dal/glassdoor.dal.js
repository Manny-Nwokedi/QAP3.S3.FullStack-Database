const dal = require("../auth_db");
var getGlassdoor = function () {
    if (DEBUG) console.log("glassdoor.pg.dal.getGlassdoor()");
    return new Promise(function (resolve, reject) {
      const sql = `SELECT id_serial, name, description_text, price, created_at FROM public."glassdoor_api" \
          ORDER BY id_serial DESC LIMIT 7;`;
      dal.query(sql, [], (err, result) => {
        if (err) {
          // logging should go here
          if (DEBUG) console.log(err);
          reject(err);
        } else {
          resolve(result.rows);
        }
      });
    });
  };

  var deleteGlassdoor = function() {
    if (DEBUG) console.log("glassdoor.pg.dal.deleteGlassdoor()");
    return new Promise(function(resolve, reject) {
        const sql = "DELETE id_serial, name, description_text, price, created_at FROM public.\"glassdoor_api\" \
        ORDER BY id_serial DESC LIMIT 7;";
        dal.query(sql, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        }); 
    });
};


var updateGlassdoor = function () {
    if (DEBUG) console.log("glassdoor.pg.dal.updateGlassdoor()");
    return new Promise(function (resolve, reject) {
        const sql = "UPDATE id_serial, name, description_text, price, created_at FROM public.\"glassdoor_apii\"\
        ORDER BY id_serial DESC LIMIT 7;";
        dal.query(sql, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows[0]);
            }
        });
    });
};

var putGlassdoor = function() {
    if(DEBUG) console.log("glassdoor.pg.dal.updateGlassdoor()");
    return new Promise(function(resolve, reject) {
      const sql = "UPDATE id_serial, name, description_text, price, created_at FROM public.\"glassdoor_api\"\
      ORDER BY id_serial DESC LIMIT 7;"; 
      dal.query(sql, [], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      }); 
    });
  };

  var patchGlassdoor = function() {
    if(DEBUG) console.log(("glassdoor.pg.dal.updateGlassdoor()"));
    return new Promise(function(resolve, reject) {
      const sql = "UPDATE id_serial, name, description_text, price, created_at FROM publicc.\"glassdoor_api\"\
      ORDER BY id_serial DESC LIMIT 7;"; 
      dal.query(sql, [], (err, result) => {
        if (err) {
            reject(err);
          } else {
            resolve(result.rows);
          }
      }); 
    });
  };
module.exports = {
  getGlassdoor,
  deleteGlassdoor,
  updateGlassdoor,
  putGlassdoor,
  patchGlassdoor,
};