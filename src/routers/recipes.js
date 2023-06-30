const express = require("express");
const router = express.Router();
const { getAll, save, get, update, remove } = require("../controllers/recipes");

const auth = require('../middleware/auth');

/*router.get("/", getAll);
router.post("/", save);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);*/

// Route `GET` and `POST` HTTP requests for `/`npm run
//router.route('/').get(getAll).post(save);
router.route('/')
    .get(auth.authenticate(), getAll)
    .post(auth.authenticate(), save);

// Route `GET`, `PUT`, and `DELETE` HTTP requests for `api/v1/recipes/:id`
router.route('/:id')
    .get(auth.authenticate(), get)
    .put(auth.authenticate(), update)
    .delete(auth.authenticate(), remove);

module.exports = router;