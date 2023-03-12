const express = require('express');

const router = express.Router();

router
    .route('')
    .get(getAllProduits)
    .post(createProduit);

router
    .route('/:id')
    .get(getProduit)
    .patch(updateProduit)
    .delete(deleteProduit);

module.exports = router;