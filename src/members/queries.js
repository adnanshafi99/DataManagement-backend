const getMembers = "SELECT * FROM member";
const getMembersById = "SELECT * FROM member WHERE id = $1";
const checkNameExists = "SELECT s FROM member s WHERE s.name = $1";
const addMembers = "INSERT INTO member (timestamp, name, shapecolor) VALUES ($1, $2, $3)";
const removeMembers = "DELETE FROM member WHERE id = $1";
const updateMembers = "UPDATE member SET name = $2, shapecolor = $1 WHERE id = $3";

module.exports = {
    getMembers,
    getMembersById,
    checkNameExists,
    addMembers,
    removeMembers,
    updateMembers,
};

