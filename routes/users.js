const mongoose = require('mongoose');
const User = mongoose.model('User')

function usersRoutes(app) {
    app
        .get('/api/users', (req, res) => {
            User
                .find({})
                .then(list => res.json(list).end)
        })
        .post('/api/users', (req, res) => {
            const user = new User(req.body);
            user.save()
                .then(user => res.json(user).end())
                .catch(err => res.status(400).json(err))
        })
        .get('/api/users/:userId', (req, res) => {
            User.findById(req.params.userId)
                .select('name birthDate gender about')
                .then((user) => res.json(user).end())
                .catch(() => res.status(400).end())
        })
        .delete('/api/users/:userId', (req, res) => {
            User.findById(req.params.userId)
                .then(user => user.remove())
                .then((user) => res.json(user).end())
                .catch(() => res.status(400).end())
        })
        .put('/api/users/:userId', (req, res) => {
            User.findById(req.params.userId)
                .then(user => Object.assign(user, req.body))
                .then(user => user.save())
                .then((user) => res.json(user).end())
                .catch(() => res.status(400).end())
        })
}

module.exports = usersRoutes;