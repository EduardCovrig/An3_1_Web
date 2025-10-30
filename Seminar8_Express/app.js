const express = require('express');
const app = express();
const port = 3000;
const Book = require("./Book.js");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log("Running on port " + port);
});

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Robinson Crusoe", "adventures", "Daniel Defoe"),
new Book(3, "Foundation", "sf", "Asiimov")
];


const bookRouter = express.Router();
app.use('/api', bookRouter);


//fara router => app.get('/books',(req,res)) ...)
bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        }
        else {
            filteredBooks = books;
        }
        //localhost:3000/books?sorted=true
        if (req.query.sorted) {
            filteredBooks.sort((x, y) => {
                if (x.name < y.name) return -1;
                if (x.name == y.name) return 0;
                else return 1;
            })
        }
        res.json(filteredBooks);
    })
    .post((req, res) => {
        receivedBody = req.body;
        id = receivedBody.id;
        if (books.find(x => x.id == id))
            return res.json({ "error": "Id already used" });
        else {
            let newBook = new Book(req.body.id,
                req.body.name,
                req.body.genre,
                req.body.author,);
            books.push(newBook);
            console.log(books);
            return res.json(newBook);
        }
    });
bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(x => x.id == req.params.bookId)
        bookModif.name = req.body.name;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;
        bookModif.something = req.body.something;
        return res.json(bookModif);
    })
    .delete((req, res) => {
        let bookToDelete = books.find(x => x.id == req.params.bookId);
        if (!bookToDelete) return res.json({ "error": "Id not found" })
        else {
            books=books.filter( x => x.id!==bookToDelete.id)
            return res.json(bookToDelete);
        }


    })
