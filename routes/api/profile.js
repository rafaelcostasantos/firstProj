const express = require('express');
const router = express.Router();

//@route GET api/profile/test
//@desc tests profile route
//@access public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));		//Don't need the /api/users because it's defined in server.js

module.exports = router;