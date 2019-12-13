const mongoose = require('mongoose');
const Post = mongoose.model('Post')

function postsRoutes(app) {
    app
        .get('/api/posts', (req, res) => {
            User
                .find({})
                .then(list => res.json(list).end)
        })
        .post('/api/posts', (req, res) => {
            const post = new Post(req.body);
            post.save()
                .then(post => res.json(post).end())
                .catch(err => res.status(400).json(err))
        })
        .get('/api/posts/:postId', (req, res) => {
            post.findById(req.params.postId)
                .then((post) => res.json(post).end())
                .catch(() => res.status(400).end())
        })
        .delete('/api/posts/:postId', (req, res) => {
            post.findById(req.params.postId)
                .then(post => post.remove())
                .then((post) => res.json(post).end())
                .catch(() => res.status(400).end())
        })
        .put('/api/posts/:postId', (req, res) => {
            post.findById(req.params.postId)
                .then(post => Object.assign(post, req.body))
                .then(post => post.save())
                .then((post) => res.json(post).end())
                .catch(() => res.status(400).end())
        })
}

module.exports = postsRoutes;