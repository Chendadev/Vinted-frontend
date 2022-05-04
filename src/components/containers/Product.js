import React from 'react'
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    return (
        <div>
            <h2>Product Component</h2>
            <span>The product id is : {id}</span>
        </div>
    )
}
