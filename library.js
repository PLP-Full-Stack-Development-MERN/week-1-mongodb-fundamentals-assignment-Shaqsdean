db.insertMany([{    
    title: 'Outliers',
    author: 'Dean Mulandi',
    publishedYear: '2013',
    genre: 'Inspiration',
    ISBN: 'abcd01'
  },
  {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publishedYear: '2018',
    genre: 'motivation',
    ISBN: '123-456-789'
  },
  {
  },
  {
    title: 'Harry Potter',
    author: 'John Doe',
    publishedYear: '1997',
    genre: 'Fiction',
    ISBN: '123-123-456'
  },
  {
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    publishedYear: '1980',
    genre: 'classic',
    ISBN: '123-456-456'
  },
  {
    title: 'Atomic Habits',
    author: 'Githinji',
    publishedYear: '2015',
    genre: 'inspiration',
    ISBN: '456-789-789'
  }
]
)

db.books.find()
db.books.find({author:"Dean Mulandi"})
db.books.find({publishedYear: { $gt: 2000} })

db.books.updateOne({title:"Outliers"}, {$set: {publishedYear: 2004}})
db.books.updateMany({}, { $set: { rating: 4.5 } })

db.books.deleteOne({ISBN:"abcd01"})
db.books.deleteMany({genre:"inspiration"})

db.users.insertOne({userId:"001", name:"Jame Mbugua", email:"mbugua@gmail.com", phone:"0712345678"})
db.products.insertOne({productId:"115", name:"Laptop", price:"35000", category:"Electronics"})
db.orders.insertOne({orderId:"1001", userId:"001", product:[115], totalPrice:"35000" })

db.books.aggregate([{ $group: { _id: "$genre", totalBooks: { $sum: 1 } } }])
db.books.aggregate([{ $group: { _id: null, avgPublishedYear: { $avg: "$publishedYear" } } }])
db.books.aggregate([{ $sort: { rating: -1 } }, { $limit: 1 }])

db.books.createIndex({ author: 1 })