import { useState } from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io'

function Rating({ rating }) {
    const [userRating, setUserRating] = useState(rating)
    return (
        <div>
            <h1>Rating: {userRating}</h1>
            {userRating >= 1 ? (<IoIosStar onClick={() => setUserRating(1)} />) : (<IoIosStarOutline onClick={() => setUserRating(1)} />)}
            {userRating >= 2 ? (<IoIosStar onClick={() => setUserRating(2)} />) : (<IoIosStarOutline onClick={() => setUserRating(2)} />)}
            {userRating >= 3 ? (<IoIosStar onClick={() => setUserRating(3)} />) : (<IoIosStarOutline onClick={() => setUserRating(3)} />)}
            {userRating >= 4 ? (<IoIosStar onClick={() => setUserRating(4)} />) : (<IoIosStarOutline onClick={() => setUserRating(4)} />)}
            {userRating >= 5 ? (<IoIosStar onClick={() => setUserRating(5)} />) : (<IoIosStarOutline onClick={() => setUserRating(5)} />)}
        </div>
    )
}

export default Rating