import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Offer() {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams(); // chemin app : params same as this

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
                setData(response.data);
                console.log("data Offer :", response) // ne pas faire de clg sur un state, here data !!
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return (
        isLoading ? (<p>en cours</p>) : (
            <>
                <div className="picture_offer">
                    {/* {data.product_pictures.map((picture, index) => { */}
                    {/* return ( */}

                    <div>
                        <img
                            src={data.product_image.secure_url}
                        />
                    </div>

                    {/* );
                    })} */}
                </div>

                {data.product_details.map((infos, num) => {
                    // console.log(infos);
                    const keys = Object.keys(infos);
                    return (
                        <div key={num} className="infos_offer">
                            {keys[0]} : {infos[keys[0]]} {/* doit etre meme index que la clé */}
                            {/* <p>{infos.MARQUE} </p>
                            <p>{infos.TAILLE}</p>
                            <p>{infos.ÉTAT}</p>
                            <p>{infos.COULEUR}</p>
                            <p>{infos.EMPLACEMENT}</p> */}
                        </div>
                    );
                })}

            </>
        )
    )
}
