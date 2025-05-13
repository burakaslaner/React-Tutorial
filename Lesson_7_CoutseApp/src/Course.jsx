import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>

            <img src={image} width={210} height={110} />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price}₺</h3>
            <div className='course-link'><a style={{ testDecoration: 'none' }} href={link}>Satın almak için tıkla!</a></div>

        </div>
    )
}

export default Course