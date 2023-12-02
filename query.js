const pool = require('./config.js')
const express = require('express');
const router = express.Router();

// Table Film

// GET ALL FILM
router.get('/film', (req, res) => {
    const query = `SELECT * FROM film 
    ORDER BY film_id ASC`

    pool.query(query, (err, result) => {
        if (err) throw err;

        res.status(200).json(result.rows);
    })
})

// GET FILM BY ID
router.get('/film/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT * FROM film
    WHERE film_id = ${id}`

    pool.query(query, (err, result) => {
        if(err) throw err;

        res.status(200).json(result.rows[0]);
    })
})

// GET CATEGORY LIST
router.get('/category', (req, res) => {
    const query = `SELECT * from category`

    pool.query(query, (err, result) => {
        if (err) throw err;

        res.status(200).json(result.rows);
    })
})

// GET FILM BY CATEGORY
router.get('/film/category/:id', (req, res) => {
    const { id } = req.params;

    const query = `SELECT f.* FROM film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    WHERE c.category_id = ${id} ORDER BY fc.film_id ASC`

    pool.query(query, (err, result) => {
        if(err) throw err;

        res.status(200).json(result.rows);
    })
})

module.exports = router;

