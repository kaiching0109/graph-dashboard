import React from 'react'
// import './Card.scss'
import { Container, Row } from 'react-bootstrap'

const Card = ({ children, title }) => {
  return (
    <Container>
      <Row>
        <div className='card u-center-text'>
          {title && (<div className='card__heading'>{title}</div>)}
          <div className='card__body'>
            {children}
          </div>
        </div>
      </Row>
    </Container>
  )
}

export default Card
