import { useState } from "react";

export default function StarRating() {

    const [ rating, setRating ] = useState(0);

    return (
        <div>
        {
            [1,2,3,4,5].map((star) => {
                return <span key={star} 
                onClick={ () => setRating(star) } 
                className={`star ${star <= rating ? "active" : ""}`}
                >
                    ★
                </span>
            })
        }
        </div>
    );
}