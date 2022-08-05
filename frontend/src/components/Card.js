import './card.css'

function Card(props) {

    const imageUrl = 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg';

    return(
        <div className='mv-card'>
            <div className='mv-cover'>
                <img src={imageUrl} alt='cover' height='160px'  width='170px'/>
            </div>
            <div className='mv-name'>{props.data.name}</div>
            <div className='mv-rating'><span>Rating: </span>{props.data.rating}</div>
            <div className='mv-date'><span>Date: </span>{props.data.release_date}</div>
        </div>
    )
}

export default Card;