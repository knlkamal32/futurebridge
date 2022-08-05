module.exports = (req, res, next) => {
    const { name, rating, release_date} = req.body;

    if(!name || !rating || !release_date) {
        res.send('Please fill all the required fields!')
    } else {
        next();
    }
}