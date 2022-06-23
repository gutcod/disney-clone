const Card = ({thumbnail, title}) => {
    return <img className='card' src={thumbnail.url} alt={title}/>
}

export default Card;