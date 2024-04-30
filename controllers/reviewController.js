const findAllReviews = (req, res) => {
    res.json({ message: 'Hello Commentaire!' })
}

const findReviewByPk = (req, res) => {
    res.json({ message: `Commentaire n°${req.params.id}` })
}

const createReview = async (req, res) => {
    // req.body
    res.json({ message: 'Hello create review!' })
}

module.exports = { findAllReviews, findReviewByPk, createReview }