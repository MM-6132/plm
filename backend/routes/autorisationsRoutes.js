const express = require('express');

const router = express.Router();

router
    .route('')
    .get(getAllAutorisations)
    .post(createAutorisation);

router
    .route('/:id')
    .get(getAutorisations)
    .patch(updateAutorisation)
    .delete(deleteAutorisation);

module.exports = router;