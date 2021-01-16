const Book = require('../models/Book');
const API = require('../utils/API')

exports.query = (req, res, next) => {
  console.log(req.query);
  req.query.limit = req.query.limit;
  req.query.sort = req.query.sort;
  req.query.fields = req.query.fields;
  next();
};

exports.getQueryBook = async (req, res) => {
  try {
    const futures = new API(Book.find(), req.query)
      .sort()
      .limit()

    let books = await futures.query;

    res.status(200).json({
      status: 'success',
      msg: 'this query build',
      results: books.length,
      data: {
        books,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      msg: 'Not working this query ' + error,
    });
  }
};

exports.createBook = async (req,res)=>{
    try {
        const newBook = await Book.create(req.body)
        res.status(201).json({
            status: 'success',
            msg: 'create new book',
            data: {
              book: newBook,
            },
          });
    } catch (error) {
        console.error("Errore: " + error);
        res.status(400).json({
            status: 'fail',
            msg: 'not create book failed' + error,
          });
    }
}

exports.getAllBook = async (req,res)=>{
  console.log(req.query);
    try {
        const allBook = await Book.find({})
        res.status(201).json({
            status: 'success',
            msg: 'get all book',
            data: {
              books: allBook,
            },
          });
    } catch (error) {
        console.error("Errore: " + error);
        res.status(400).json({
            status: 'fail',
            msg: 'not  book failed' + error,
          });
    }
}

exports.getBookById = async (req,res)=>{
    try {
        const bookById = await Book.findById({_id:req.params.id})
        res.status(201).json({
            status: 'success',
            msg: 'get book by id:'+req.params.id ,
            data: {
              book: bookById,
            },
          });
    } catch (error) {
        console.error("Errore: " + error);
        res.status(400).json({
            status: 'fail',
            msg: 'not  book by  id failed' + error,
          });
    }
}

exports.deleteById = async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json({
        msg: `Book id:${req.params.id} delete`,
        status: 'success',
        data: null,
      });
    } catch (error) {
      res.status(400).json({
        msg: `Book id:${req.params.id} delete failed`,
        status: 'fail ' + error,
      });
    }
};

exports.updateBookById = async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        msg: `Book id:${req.params.id} update`,
        status: 'success',
        data: {
          book,
        },
      });
    } catch (error) {
      res.status(400).json({
        msg: `Book id:${req.params.id} update failed :` + error,
        status: 'fail',
      });
    }
};