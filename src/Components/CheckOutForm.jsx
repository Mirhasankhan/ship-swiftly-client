import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const CheckOutForm = ({ uploadShipping }) => {
    const { destination, distanceCost, floorCost, parcelName, parcelType, pickUpCost, totalCost, image } = uploadShipping
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [tId, setTId] = useState('')

    useEffect(() => {
        fetch('https://ship-swiftly-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ totalCost })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
            })
            .catch(error => {
                console.log(error);
            })

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setProcessing(true)

        const { paymentIntent, payError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'No Email',
                        name: user?.displayName || 'No Name'
                    },
                },
            },
        )

        if (payError) {
            toast.error(payError);
        }
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTId(paymentIntent.id)
            const shippingPayment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                totalCost,
                floorCost,
                destination,
                distanceCost,
                image,
                pickUpCost,
                paymentStatus: 'Successfull',
                parcelType,
                ParcelName: parcelName,
            }
            fetch('https://ship-swiftly-server.vercel.app/shippings', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(shippingPayment)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Shipping Confirmed')
                })
        }

    }
    return (
        <div>
            <form className="w-full" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button disabled={!stripe || !clientSecret || processing} className="continue-button mt-4" type="submit">
                    Confirm Payment
                </button>
                
            </form>
            <Link to="/"><button className="thin-button mt-3">Back Home</button></Link>
            {cardError && <p className="text-red-600 pt-6">{cardError}</p>}
            {tId &&
                <div>
                    <p className="text-green-500 text-2xl font-semibold pt-3">Transaction completed</p>
                    <Link to="/myShippings"><button className="thin-button">Go To My Shippings</button></Link>
                </div>
            }
        </div>
    );
};

export default CheckOutForm;