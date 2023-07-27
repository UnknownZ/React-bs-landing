import React from 'react'

function CardContainer({ children, className }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {children}
    </div>
  )
}


export default CardContainer