const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

// Routes crud

router.get('/', (req, res) => {
    Post.findAll().then(posts => {
        res.json(posts);
    })
})

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        body: req.body.body
    }).then(post => {
        res.json(post);
    })
});

router.get('/:id', (req, res) =>{
    Post.findByPk(req.params.id).then(post => {
        res.json(post);
    })
})

router.patch('/:id', (req, res) =>{
    Post.update({
        title: req.body.title,
        body: req.body.body
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    });
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});


module.exports = router;