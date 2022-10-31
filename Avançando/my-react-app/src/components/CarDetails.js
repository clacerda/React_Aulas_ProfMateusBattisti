import React from 'react'

const CarDetails = ({brand, km, color, novo}) => {
  return (
    <div>
        <h2>Detalhes do carro: </h2>
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
            {novo && <p>Este carro é novo!</p>}
        
    </div>
  )
}

export default CarDetails