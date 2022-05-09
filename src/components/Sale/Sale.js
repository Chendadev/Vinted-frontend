import "./Sale.scss"
import axios from "axios";
import { useState } from "react";

export default function Sale({ token }) {
    const [picture, setPicture] = useState(null);
    const [data, setData] = useState(null);
    const [isPictureSending, setIsPictureSending] = useState(false);

    const handleSendPicture = async event => {
        event.preventDefault();
        setIsPictureSending(true);

        //Je viens créer mon formData qui contiendra l'image à transmettre au serveur
        const formData = new FormData();
        formData.append("picture", picture);

        //Je peux également fournir du texte à mon formData, je retrouverais ces informations dans la clé req.fields
        formData.append("name", "Hello Bastien !");
        const response = await axios.post(
            "http://localhost:3000/upload",
            formData,
            {
                headers: {
                    authorization: `Bearer ${token}`
                },
            }
        );
        setData(response.data);
        setIsPictureSending(false);

        console.log(response.data);
    }
    return (
        <div className="container">
            <h1>Vends tes articles</h1>
            <form onSubmit={handleSendPicture}>
                {/* <input
            type="text"
            value="input"
            onChange={(event) => {
              // setInput(event.target.value);
            }}
          /> */}

                {/* <Input setDate={setInput} data={input}>
          <Input setDate={setName} data={name}> */}

                <br />
                <input
                    type="file"
                    onChange={(event) => {
                        // console.log("File !");
                        // console.log(event.target.files[0]);
                        setPicture(event.target.files[0]);
                    }}
                />
                <input type="submit" value="Sauvegarder" />
            </form>

            {isPictureSending === true ? (
                <div>Image en cours d'upload</div>
            ) : (
                data && <img src={data.secure_url} alt="" />
            )}
        </div>

    )
}
