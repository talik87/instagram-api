const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken')
const {jwtSecret} = require('../config')

function authorise(req, res, next) {
	if (!req.user) {
		return res.status(401).end();
	}
	next();
}
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
                .catch(err => res.status(400).json(err).end())
        })
        .get('/api/users/me',authorise, (req, res) => {
            User.findById(req.user)
                .select('_id username name birthDate gender about created')
                .then(user => res.json(user));
                
        })
        .get('/api/users/:userId', (req, res) => {
			User.findById(req.params.userId)
				.select('name birthDate gender about created')
				.then(user => res.json(user).end())
				.catch(() => res.status(400).end())
		})
        .delete('/api/users/:userId', (req, res) => {
            User.findById(req.params.userId)
                .then(user => user.remove())
                .then(user => res.json(user).end())
                .catch(() => res.status(400).end())
        })
        .put('/api/users/:userId', (req, res) => {
            User.findById(req.params.userId)
                .then(user => Object.assign(user, req.body))
                .then(user => user.save())
                .then(user => res.json(user).end())
                .catch(err => {
					console.error(err);
                    res.status(400).json({message: 'failed to update user'}).end()
                });
        })
        .post('/api/users/login', (req, res) => {
            User
                .findOne({
                    username: req.body.username,
                    password: req.body.password
                })
                .then(user => {
                    if (!user) {
                        res.status(403).end();
                        return;
                    }
                    const token = jwt.sign(
                        {data: user._id},
                        jwtSecret,
                        {expiresIn: '7d'}
                        );
                    res.cookie('user', token, {maxAge: 86400000, httpOnly: true});
                    res.end();
                })
                .catch(() => res.status(400).end())
        });
}

module.exports = usersRoutes;