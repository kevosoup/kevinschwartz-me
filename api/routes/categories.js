const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try{
        const savedCats = await newCat.save()
        res.status(200).json(savedCats);
    }catch{
        res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    }catch{
        res.status(500).json(err);
    }
})

module.exports = router;
