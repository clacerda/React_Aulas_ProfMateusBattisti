import React from 'react'

const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>
            <ul>
                <li>
                    MARCA: {brand} 
                </li>
                <li>
                    KM: {km}
                </li>
                <li>
                    COR: {color}
                </li>
            </ul>
        </h2>
    </div>
  )
}

export default CarDetails