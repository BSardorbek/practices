const slugify = require('slugify');
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: String,
    price: {
      type: Number,
      required: true,
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });

  bookSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });


const Book = mongoose.model('Book', bookSchema);

module.exports = Book;