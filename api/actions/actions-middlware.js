const Actions = require('./actions-model');

async function validateActionsId(req, res, next) {
    try {
        const action = await Actions.get(req.params.id)
        if (action) {
            req.action = action
            next();
        }
        else {
            res.status(404).json({message: 'this action does not exist'})
        }
    }
    catch (err) {
        next(err);
    }
}

module.exports = {
    validateActionsId,
}
