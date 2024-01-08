const getMembers = "SELECT * FROM member";
const getMembersById = "SELECT * FROM member WHERE id = $1";
const checkNameExists = "SELECT s FROM member s WHERE s.name = $1";
const addMembers = "INSERT INTO member (timestamp, name, shape, color) VALUES ($1, $2, $3, $4)";
const removeMembers = "DELETE FROM member WHERE id = $1";
const updateMembers = "UPDATE member SET name = $3, shape = $1, color = $2 WHERE id = $4";

module.exports = {
    getMembers,
    getMembersById,
    checkNameExists,
    addMembers,
    removeMembers,
    updateMembers,
};

