import "./Publish.scss"
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

export default function Publish() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(Number);
    const [condition, setCondition] = useState("");
    const [city, setCity] = useState("");
    const [brand, setBrand] = useState("");
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [exchange, setExchange] = useState(false);

    const [picture, setPicture] = useState(null);
    const [data, setData] = useState(null);
    const [isPictureSending, setIsPictureSending] = useState(false);

    const token = Cookies.get("userToken")
    const handleSubmitPost = async event => {
        event.preventDefault();
        setIsPictureSending(true);

        //Je viens créer mon formData qui contiendra l'image à transmettre au serveur
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("picture", picture);

        try {
            const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
                formData,
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setData(response.data);

            console.log(response.data);
        } catch (error) {
            if (error.response.status === 500) {
                console.error("An error occurred");
            } else {
                console.error(error.response.data.msg);
            }
        }
        setIsPictureSending(false);
    };

    return (
        <div className="container">
            <h1>Vends tes articles</h1>
            <form onSubmit={handleSubmitPost}>
                {/* <input
            type="text"
            value="input"
            onChange={(event) => {
              // setInput(event.target.value);
            }}
          /> */}

                {/* <Input setDate={setInput} data={input}>
          <Input setDate={setName} data={name}> */}

                <input
                    type="text"
                    placeholder="titre"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="price"
                    value={price}
                    onChange={(event) => {
                        setPrice(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="condition"
                    value={condition}
                    onChange={(event) => {
                        setCondition(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="city"
                    value={city}
                    onChange={(event) => {
                        setCity(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="brand"
                    value={brand}
                    onChange={(event) => {
                        setBrand(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="size"
                    value={size}
                    onChange={(event) => {
                        setSize(event.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="color"
                    value={color}
                    onChange={(event) => {
                        setColor(event.target.value);
                    }}
                />
                <input
                    type="file"
                    onChange={(event) => {
                        setPicture(event.target.files[0]);
                    }}
                />
                <input
                    type="checkbox"
                    onClick={(event) => {
                        setExchange(false);
                    }}
                />
                <input type="submit" value="ajouter" />
                {isPictureSending === true ? (
                    <div>Image en cours d'upload</div>
                ) : (
                    data && <img src={data.secure_url} alt="" />
                )}
            </form>
        </div>

    )
}
