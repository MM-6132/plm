const express = require('express');

const router = express.Router();

router
    .route('')
    .get(getAllDocuments)
    .post(createDocuments);

router
    .route('/:id')
    .get(getDocument)
    .patch(updateDocument)
    .delete(deleteDocument);

module.exports = router;