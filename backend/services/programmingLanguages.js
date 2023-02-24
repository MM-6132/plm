const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT *
    FROM TATABLE LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return {
        data,
        meta,
    };
}

async function create(programmingLanguage) {
    const result = await db.query(
        `INSERT TATABLE
    (CHAMP1, CHALMP) 
    VALUES 
    ("${programmingLanguage.name}", ${programmingLanguage.TONCHAMP},})`
    );

    let message = "Error in creating programming language";

    if (result.affectedRows) {
        message = "Programming language created successfully";
    }

    return { message };
}

async function update(id, programmingLanguage) {
    const result = await db.query(
        `UPDATE TATABLE 
    SET name="${programmingLanguage.name}", released_year=${programmingLanguage.TONCHAMP}
    WHERE id=${id}`
    );

    let message = "Error in updating programming language";

    if (result.affectedRows) {
        message = "Programming language updated successfully";
    }

    return { message };
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM TATABLE WHERE id=${id}`
    );

    let message = "Error in deleting programming language";

    if (result.affectedRows) {
        message = "Programming language deleted successfully";
    }

    return { message };
}

module.exports = {
    getMultiple,
    create,
    update,
    remove,
};