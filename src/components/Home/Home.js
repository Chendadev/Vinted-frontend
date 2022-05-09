import './Home.scss';
import React from 'react'
import { useState, useEffect } from "react";
import bannerImg from "../../assets/img/banner-header.png";

import axios from "axios";
import {
    Link
} from "react-router-dom";

export default function Home() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offers?limit=10&page=${page}`);
                // console.log("voir data", response)
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [page])

    return isLoading === true ? (<div>En cours de chargement ...</div>) :
        (
            <div className="home">
                <div className="header-elements">
                    <img src={bannerImg} alt="sell banner" className="banner" />
                    {/* <img src={effectSvg} alt="paper effect banner" className="paper-effect" /> */}
                </div>
                <div className="offers">
                    {data.offers.map((offer, index) => {
                        const id = offer._id;

                        // console.log("yakoila", offer)
                        return (
                            // image header à faire disparaitre quand on quitte la page d'accueil Home : 

                            <div className="articles">
                                <div>{offer.owner.account.username}</div>
                                <Link key={index} to={`/offer/${id}`}>
                                    {/* {offer.product_pictures[0] ?
                                        <img src={offer.product_pictures[0].secure_url} />
                                        : (null)}

                                    <p>{offer.product_price} €</p> */}
                                    <div>
                                        <img src={offer.product_image.secure_url} alt="" />
                                    </div>
                                </Link >
                                <div>{offer.product_price} €</div>
                                {
                                    offer.product_details.map((item, num) => {
                                        return (
                                            <div className="card-infos">
                                                <p>{item.ÉTAT}</p>
                                                <p>{item.MARQUE}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        )
                    })}
                </div>
                <div className="button-pagination">
                    {page < 2 ?
                        (null) : (
                            <button onClick={() => { setPage(page - 1) }}>
                                page précédente
                            </button>
                        )
                    }
                    <p>{page}</p>

                    <button onClick={() => { setPage(page + 1) }}>
                        page suivante
                    </button>

                </div>
            </div >
        )
};
