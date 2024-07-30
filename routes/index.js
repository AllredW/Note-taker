const router = require('express').Router();
const htmlRouter = require('./html');

// Import our files containing our routes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);
router.use('/', htmlRouter);

module.exports = router;