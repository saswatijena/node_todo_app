
const getTaskByID = (req, res, next) => {
    res.send('getting by id');
    next();
}
module.exports = {
    getTaskByID: getTaskByID
}