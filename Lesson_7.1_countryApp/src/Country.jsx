import React from 'react';

function Country({ country }) {
    const { id, title, description, population, link, image } = country;
    return (
        <div className='country'>

            <img src={image} width={210} height={110} />
            <h4 className='country-title'>{title}</h4>
            <p className='country-desc'>{description}</p>
            <h3 className='country-population'>{population}</h3>
            <div className='country-link'><a style={{ testDecoration: 'none' }} href={link}>Bilgi almak için tıklayınız!</a></div>
        </div>
    )
}

export default Country