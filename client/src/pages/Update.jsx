import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        pricer: null,
        cover: "",
    });

    const navigate = useNavigate()
    const location = useLocation();

    const bookid = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleClick = async e => {
        e.preventDefault()

        try {
            await axios.put("http://localhost:8800/books/" + bookid, book)
            navigate("/")
        }
        catch (err) {
            console.log(err)
        }
        ;
    }
    console.log(book)
    return (

        < div className="form" >
            <h1> kitap güncelleme sayfası</h1>
            <input type="text" placeholder="title" name="title" onChange={handleChange} />
            <input type="text" placeholder="desc" name="desc" onChange={handleChange} />
            <input type="number" placeholder="price" name="price" onChange={handleChange} />
            <input type="text" placeholder="cover" name="cover" onChange={handleChange} />
            <button className="formButton" onClick={handleClick}>güncelle</button>
        </div >
    );
}


export default Update;