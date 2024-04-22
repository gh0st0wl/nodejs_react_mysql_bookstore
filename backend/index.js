import express from "express";
import mysql from "mysql"
import cors from "cors"
const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "test"
})
//eğer doğrulama hatası olur ise bu kodu mysql querysinde yaz
//ALTER USER 'kullanıcıadı'@'localhost' IDENTIFIED WITH mysql_native_password BY 'sifre';

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("merhaba burası backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`,`desc`,`price`,`cover`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json("kitap oluşturuldu")
    })
})
app.delete("/books/:id", (req, res) => {
    const bookid = req.params.id;
    const q = "DELETE FROM books WHERE id=?"
    db.query(q, [bookid], (err, data) => {
        if (err) return res.json(err)
        return res.json("kitap başarıyla silindi")
    })

})

app.put("/books/:id", (req, res) => {
    const bookid = req.params.id;
    const q = "UPDATE books SET `title`=?, `desc`=?, `price`=?, `cover`=? WHERE id=?"

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q, [...values, bookid], (err, data) => {
        if (err) return res.json(err)
        return res.json("kitap başarıyla güncellendi")
    })

})
app.listen(8800, () => {
    console.log("Server is running on port 8800")
})