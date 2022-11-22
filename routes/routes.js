const express = require('express');
const Model = require('../models/model');
const router = express.Router()

//Post Method
router.post('/post',  async (req, res) => {
    if (!req.body.name && !req.body.age) {
        return res.status(400).json({message: "Request Body Can Not be Empty." })
    }
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
    res.send(req.body.name)
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
})

//Get all Method
router.get('/getAll', async (req, res) => {
    const data = await Model.find()
    res.json(data)
    //res.send(data)
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const dataToUpdate = req.body
        const options = {new: true}

        const result = await Model.findByIdAndUpdate(id, dataToUpdate, options)
        res.send(result)
        }
    catch {
        res.status(400).json({message: "Error occured - NOT Updated"})
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.id} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;