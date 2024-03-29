const pool = require('../../db');
const queries = require('./queries');

const getMembers = (req, res) => {
    console.log('Entering getMembers function');
    pool.query(queries.getMembers, (error, results) => {
        if (error) {
            console.error('Error in getMembers query:', error);
            throw error;
        }
        console.log('getMembers query executed successfully');
        res.status(200).json(results.rows);
    });
};

const getMembersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMembersById, [id], (error, results) => {
        if (error) {
            console.error('Error in getMembersById query:', error);
            throw error;
        }
        console.log('getMembersById query executed successfully');
        res.status(200).json(results.rows);
    });
};

const addMembers = (req, res) => {
    const { timestamp, name, shape, color } = req.body;

    // Convert shape and color to lowercase
    const lowercaseShape = shape.toLowerCase();
    const lowercaseColor = color.toLowerCase();

    //check if name exist
    pool.query(queries.checkNameExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("Name already exists.");
        }

        //Add member to db
        pool.query(
            queries.addMembers,
            [timestamp, name, lowercaseShape, lowercaseColor],
            (error, results) => {
                if (error) {
                    console.error('Error in addMembers query:', error);
                    throw error;
                }
                res.status(201).send("Member Created Successfully");
            }
        );
    });
};

const removeMembers = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getMembersById, [id], (error, results) => {
        const noMembersFound = !results.rows.length;
        if (noMembersFound) {
            res.status(404).send("Member does not exist in the database");
        } else {

            pool.query(queries.removeMembers, [id], (error, results) => {
                if (error) {
                    console.log(error)
                    throw error
                };
                res.status(200).send("Member removed successfully.");
            });
        }
    });

};

const updateMembers = (req, res) => {
    const id = parseInt(req.params.id);
    const { shape, color, name } = req.body;

    pool.query(queries.getMembersById, [id], (error, results) => {
        const noMembersFound = !results.rows.length;
        if (noMembersFound) {
            res.status(404).send("Member does not exist in the database");
        } else {

            pool.query(queries.updateMembers, [shape, color, name, id], (error, results) => {
                if (error) {
                    console.error('Error in updateMembers query:', error);
                    throw error;
                }
                res.status(200).send("Member updated successfully");
            });
        }
    });
};

module.exports = {
    getMembers,
    getMembersById,
    addMembers,
    removeMembers,
    updateMembers,
};



