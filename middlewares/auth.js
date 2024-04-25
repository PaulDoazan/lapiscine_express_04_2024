const protect = (req, res, next) => {
    console.log('protect middleware')
    next()
}

module.exports = { protect }