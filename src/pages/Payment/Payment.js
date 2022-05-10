import '../Payment/Payment.scss'
import React from 'react'
import Stripe from "../../components/Stripe/Stripe.js";

export default function Payment() {
    const offer_name = "Peluche";
    const total = "15 euros";
    const order_amount = `${3.95} €`
    const taxes_proctection_cust = `${0.40} €`
    const taxes_delivery = `${0.80} €`;
    return (
        <div className="container">

            <div className="bloc">
                <p className="title">Résumé de la commande</p>
                <div className="infos-bloc">
                    <div className="infos-bloc-elements">
                        <div>Commande</div>
                        <div>Frais protection acheteurs</div>
                        <div>Frais de port</div>
                    </div>
                    <div className="prices">
                        <div>{order_amount}</div>
                        <div>{taxes_proctection_cust}</div>
                        <div>{taxes_delivery}</div>
                    </div>
                </div>
                <div className="amount-bloc">
                    <div className="left-amount-bloc">
                        <p>Total</p>
                    </div>
                    <div className="right-amount-bloc">
                        <p>{total}</p>
                    </div>
                    <Stripe />
                </div>
                <div className="reminder-text">
                    <p>Il ne vous reste qu'une étape pour vous offrir <span>{offer_name}</span>. Vous allez payer <span>{total}</span> frais de protection et frais de port inclus.</p>
                </div>
                <div className="bloc-payment">
                    <p>CB xxxx xxxx xxxx</p>
                    <button>Pay</button>
                </div>
            </div>
        </div>
    )
}
