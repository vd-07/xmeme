// import necessary packages

const express = require('express');
const { update } = require('../models/Post');
const router = express.Router();
const Post = require('../models/Post');

// GETS BACK LAST 100 POSTS

router.get('/', async (req, res) => {

    try {

        // retrieve last 100 posts

        const posts = await Post.find().limit(100);

        // send last 100 posts in json format

        res.json(posts);


    } catch(err) {
        res.json({
            message : err
        });
    }

});

// router.post('/', (req, res) => {

//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });

//     // save to mongoDB Atlas

//     post.save()
//     .then(data => {
//         res.status(204).json(data);
//     })
//     .catch(err => {
//         res.json({
//             message: err
//         });
//     });

// });

// SUBMIT A POST

router.post('/', async (req, res) => {

    const post = new Post({
        name: req.body.name,
        url: req.body.url,
        caption: req.body.caption
    });

    // save to mongoDB Atlas

    try {
        const savedPost = await post.save();

        res.json(savedPost);

    } catch {

        res.json({
            message: err
        });

    }
});

// FETCH A SPECIFIC POST

router.get('/:postId', async (req, res) => {

    try {

        const post = await Post.findById(req.params.postId);
        
        if(post == null) {

            // not found

            res.status(404).send();

        } else {

            res.json(post);

        }

    } catch(err) {

        res.send({
            message: err
        });        

    }

});

// DELETE A POST

router.delete('/:postId', async (req, res) => {
    try {
        
        const removedPost = await Post.deleteOne({_id: req.params.postId });

        // send the deleted post
        if(removedPost.n == 0) {

            res.status(404).send();

        } else {

            res.json(removedPost);

        }

    } catch(err) {

        res.send({
            message: err
        });        

    }
    

});

router.patch('/:postId', async (req, res) => {
    try{

        // cannot update name

        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            { $set : {url: req.body.url, caption: req.body.caption}}
            );

            if(updatedPost.n == 0) {

                res.status(404).send();

            } else {

                res.status(204).send();

            }               

    } catch(err) {

        res.send({
            message: err
        });        

    }
    

})

module.exports = router;