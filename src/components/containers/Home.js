import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
                // console.log("voir data", response)
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])

    return isLoading === true ? (<div>En cours de chargement ...</div>) :
        (
            <div className="home">
                <h1>Bienvenue sur l'accueil</h1>
                {data.offers.map((offer, index) => {
                    console.log("yakoila", offer.product_details)
                    return (
                        <div className="card">
                            {offer.product_pictures.map((product, num) => {
                                return (
                                    <div>
                                        <img src={product.secure_url} />
                                        <p>{product.product_price}</p>
                                    </div>

                                )
                            })}
                            {offer.product_details.map((item, num) => {
                                return (
                                    <div>
                                        <p>{item.ÉTAT}</p>
                                        <p>{item.MARQUE}</p>
                                    </div>

                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
};
