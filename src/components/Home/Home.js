import './Home.scss';
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import {
    Link
} from "react-router-dom";

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
                {data.offers.map((offer, index) => {
                    const id = offer._id;
                    // console.log("yakoila", offer)
                    return (
                        <Link to={`/offer/${id}`}>
                            <div className="card">
                                {offer.product_pictures[0] ?
                                    <img src={offer.product_pictures[0].secure_url} />
                                    : (null)}
                                <p>{offer.product_price} €</p>
                                {offer.product_details.map((item, num) => {
                                    return (
                                        <div>
                                            <p>{item.ÉTAT}</p>
                                            <p>{item.MARQUE}</p>
                                        </div>
                                    )
                                })}
                            </div></Link>

                    )
                })}
            </div >
        )
};
