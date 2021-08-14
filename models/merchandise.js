// Create a Mongoose Schema of Merchandise
// String title;
// String price;
// String description;
// String url;
// String image;

const MerchandiseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Merchandise', MerchandiseSchema);