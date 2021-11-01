const express = require("express");
const router = express.Router();
const Notes = require('../model/note');
const fetchuser = require("../Middleware/fetchuser");
const { body, validationResult } = require('express-validator');



// Route1: Fetching notes of user
router.get('/fetchnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes);

    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server Error")
    }


})

router.post('/addnotes', fetchuser, [
    body('title', "title should contain 5 char").isLength({ min: 5 }),
    body('description', "description should contain 5 char").isLength({ min: 5 }),
    body('author', "author should contain 5 char").isLength({ min: 5 })
],
    async (req, res) => {

        try {

            const { title, description, author } = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const note = new Notes({
                title, description, author, user: req.user.id
            })

            const savenote = await note.save();
            res.json(savenote);

        } catch (error) {
            console.log(error);
            res.status(500).send("Internal server Error")
        }
    })


router.put('/updatenotes/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, author } = req.body;

        const newNote = {};

        if (title) { newNote.title = title }
        if (description) { newNote.description = description }
        if (author) { newNote.author = author }


        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(400).json("Not Found") }
        // console.log(note);
        // console.log(note.user.toString());
        // console.log(req.user.id);

        if (note.user.toString() !== req.user.id) {
            return res.status(400).json("Not Allowed")
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.send(note)
    } catch (error) {
        res.status(500).json("Internal Error");
    }


})



router.delete("/deletenotes/:id", fetchuser, async (req, res) => {

    try {

        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(400).json("Not Found") }

        if (note.user.toString() !== req.user.id) {
            return res.status(400).json("Not Allowed")
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.status(200).json("Successfully Deleted")

    } catch (error) {
        res.status(500).json("Internal Error")
    }


})

module.exports = router;