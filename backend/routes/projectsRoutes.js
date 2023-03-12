const express = require('express');

const router = express.Router();

router
    .route('')
    .get(getAllProjects)
    .post(createProject);

router
    .route('/:id')
    .get(getProject)
    .patch(updateProject)
    .delete(deleteProject);

module.exports = router;