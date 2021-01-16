
function logger(req,res,next){

    console.log(req.header('x-api-key'));

    next()
}

module.exports = logger